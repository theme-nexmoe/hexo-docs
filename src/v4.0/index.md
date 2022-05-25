# Quick Start

:::info
You can use this project [Hexo Theme Nexmoe Example](https://github.com/theme-nexmoe/hexo-theme-nexmoe-example) as an example.
:::

Before using Nexmoe, you should read [Hexo Docs](https://hexo.io/docs/index.html), finish installation of Hexo and Initialize your project by editing `config.yml`.

## Install Nexmoe

Run the following command to install Nexmoe:

```shell
npm i hexo-theme-nexmoe
```

## Use Nexmoe

Edit `_config.yml` in the root directory of your project. Change the value of the key named `theme` to `nexmoe`.

## Configure Nexmoe

Edit `_config.nexmoe.yml` in the root directory of your project.

## Run Nexmoe

Use the following command to run Nexmoe:

```shell
hexo s --debug
```

> 在服务启动的过程，注意观察命令行输出是否有任何异常信息，如果你碰到问题，这些信息将帮助他人更好的定位错误。

当命令行输出下述内容时说明 Hexo 已经监听在本机的 4000 端口，使用浏览器访问 [http://localhost:4000](http://localhost:4000/) ，检查站点是否正确运行

```shell
INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.
```

> 如果你在使用过程中遇到问题，请尝试在文档中进行搜索，或者在 GitHub 上提出 [issue](https://github.com/nexmoe/hexo-theme-nexmoe/issues/new)

## Update Nexmoe

Update Nexmoe by running the following command:

```shell
npm update hexo-theme-nexmoe
```

After updating, you should see what's changed in the changelog. And edit `_config.nexmoe.yml` to match the new version.
