const moment = require('moment')
const fs = require('fs')
const path = require('path')

/**
 * 读取文件函数
 * @param  {string} 文件本地的绝对路径
 * @return { Array }
 */
function readFileListByPath(dirpath) {
	return new Promise((resolve, reject) => {
		// 存放所有文件信息对象的一个数组
		let fileInfoList = [] , fileList = [] , dirList = []
		let counter = 0
		// 根据指定的路径，读取所有文件信息
		fs.readdir(dirpath, (err, filenames) => {
			if (err) return reject(err)
			// 循环获取每一个文件的相关信息,fs.stat 方法来获取指定文件的信息
			filenames.forEach(filename => {
				// 第一个参数是要获取信息的文件路径
				fs.stat( path.join(dirpath, filename), (err, stats) => {
					if (err) return reject(err)
					// 创建一个保存文件信息的对象
					let info = {
						name : filename,
						size : stats.size,
						mtime : moment(stats.mtime).format('YYYY-MM-DD HH:mm:ss'),
						isfile : stats.isFile()
					}

					// 将获取到的文件信息，push到数组中
					stats.isFile() ? fileList.push(info) : dirList.push(info)

					counter++
					// 当 counter 值等于 filenames 的长度的时候，表示所有的文件信息已经获取完毕了
					if (counter === filenames.length) {
						// 在concat之前，先对 dirList 和 fileList 分别进行排序
						dirList.sort(compire)
						fileList.sort(compire)
						fileInfoList = dirList.concat(fileList)
						resolve(fileInfoList)
					}
				})
			})
		})
	})

}


//排序函数 如果前一个数 要放到 后一个数 前面，则return -1
function compire(x, y) {
	let n1 = x.name
	let n2 = y.name
	if (n1 < n2) {
		return -1
	} else {
		return 1
	}
}


module.exports = readFileListByPath