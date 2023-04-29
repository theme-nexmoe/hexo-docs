# Quick Start

:::info
You can use this project <https://github.com/nexmoe/nexmoe.com> as an example.
:::

Before using Nexmoe, you should read [Hexo Docs](https://hexo.io/docs/index.html), finish installation of Hexo and Initialize your project by editing `config.yml`.

## Install Nexmoe

Run the following command to install Nexmoe:

```shell
npm install hexo-theme-nexmoe @nexmoe/hexo-renderer-inferno
```

## Use Nexmoe

Edit `_config.yml` in the root directory of your project. Change the value of the key named `theme` to `nexmoe`.

## Configure Nexmoe

Edit `_config.nexmoe.yml` in the root directory of your project.

## Run Nexmoe

Use the following command to run Nexmoe:

```shell
hexo server --debug
```

:::tip
During service startup, watch the command line output for any exception messages, which will help others better locate errors if you run into problems.
:::

When the command line outputs the following, it means that Hexo is listening on port 4000 on the local machine. Use your browser to access `http://localhost:4000/` to check if the site is running correctly

```shell
INFO  Hexo is running at http://localhost:4000/. Press Ctrl+C to stop.
```

:::tip
If you're having trouble using it, try searching through the documentation or raising an [issue](https://github.com/nexmoe/hexo-theme-nexmoe/issues/new) on GitHub
:::

## Update Nexmoe

Update Nexmoe by running the following command:

```shell
npm update hexo-theme-nexmoe
```

After updating, you should see what's changed in the changelog. And edit `_config.nexmoe.yml` to match the new version.
