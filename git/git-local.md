## git本地操作
- 不停的创建文件进行备份（没有修改的提示)，git可以帮我们管理我们的代码保证不会丢失
- 记录历史只要代码提交大git上就永久不会丢失,可以随时“穿越”，回到之前版本的代码
- 团队协作，两个人修改同一个文件的同一行，也需要手动解决冲突，可以实现自动合并（模块化，组件化）
- git拥有强大的’分支‘管理系统

## 分布式
- svn（集中式） 需要一台中央服务器
- git（分布式）
- git速度比svn快
- svn中每个文件夹都有一个文件.svn文件，git有一个单独的文件.git文件夹


## git安装
- windows安装 http://git-scm.com
- mac 如果安装过xcode自带git，homebrew是mac的包管理器

## homebrew的使用
- 通过brew install git安装git

## 配置用户（不配置用户不能提交代码）
```
git config --list   // 查看所有配置
git config --global user.name='你的名字'
git config --global user.email='你的邮箱'
```

## 初始化git
```
git init 告诉git哪个文件夹被git所管理
git status 查看git状态
```

## 删除暂存区
```
git rm --cached . -r 删除暂存区文件
```

## 添加到暂存区
```
git add ./ -A/ 文件名
```
## 添加到历史区
```
git commit -m '注释内容'
```

## linux命令
- pwd print working directory 打印当前目录
- rm -rf <文件夹> 删除文件（递归删除）
- rm <文件名> 删除文件
- mkdir <文件夹> 创建目录
- cd <目录名> change directory 改变目录
- ls 显示目录下所有的文件
- touch <文件> 创建文件
- cat <文件> 查看文件内容
- vi <文件名> 编辑文件
    - i:插入模式，esc退出编辑模式 :q！强制退出
    :wq 保存并退出

