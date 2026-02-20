'use strict';

const fs = require('hexo-fs');
const path = require('path');
const frontMatter = require('hexo-front-matter');
const moment = require('moment');

hexo.extend.filter.register('before_post_render', async function(data) {
  // 仅处理位于 _posts 目录下的文件
  const filePath = data.full_source;
  if (!filePath) return data;

  const relativePath = path.relative(hexo.source_dir, filePath);
  if (!relativePath.startsWith(path.join('_posts') + path.sep)) {
    return data;
  }

  if (data.cover || !data.date) return data;

  try {
    const sourcePath = data.full_source; 
    const rawContent = await fs.readFile(sourcePath);
    const parsed = frontMatter.parse(rawContent);
    const postDate = moment(data.date);
    
    if (!postDate.isValid()) {
      hexo.log.warn(`[AutoIndexImg] 无效日期: ${data.date} (${data.title})`);
      return data;
    }
    
    const dateStr = postDate.utcOffset(8).format('YYYYMMDD');
    const indexImg = `https://dailybing.com/api/v1/${dateStr}/zh-cn/FHD`;
    parsed.cover = indexImg;

    let newYAML = frontMatter.stringify(parsed);
    if (!newYAML.startsWith('---\n')) {
      newYAML = '---\n' + newYAML;
    }
    if (!newYAML.includes('\n---')) {
      newYAML += '\n---';
    }

    await fs.writeFile(sourcePath, newYAML);
    data.cover = indexImg;
    hexo.log.info(`[AutoIndexImg] 成功添加封面图到: ${data.title}`);

  } catch (error) {
    hexo.log.error(`[AutoIndexImg] 处理失败 (${data.title}):`, error.message);
  }

  return data;
}, 5);