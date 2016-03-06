
# Build Your Bots on Heroku, Because Bots are Apps Too

_Traditionally, we forego the excessive use of emojis on the Heroku blog. But today, we must make an exception, as we’re going to build and deploy a Slack bot to Heroku_ 🤖

Slack bots come in many shapes and sizes, they publish notifications, respond to `/slash` commands and some, the very best, can even carry a conversation. A Slack bot can be built in practically any language, but we're going to build ours with Node, and not just because I ❤ Node—Smart bots (the chatty sort) depend on Slack's WebSocket-based [RTM (Real Time Messaging) API](https://api.slack.com/rtm), and WebSockets & Node go together like Netflix & Chill.

Regardless of which language your bots are written in, Heroku is going to help you build bigger, smarter bots faster, because bots are apps too.

## Table of Contents

### 1. [Prologue]()
Setup before we set-off to do mad science.
### 2. [Publishing Notifications to Slack]()
It doesn't have to be hard, to be useful.
### 3. [Receiving and Responding to `/slash` Commands]()

### 4. [Connecting a Bot to the Slack RTM API]()
### 5. [Share Your Bot with the Heroku Button]()
### 6. [Epilogue]()

## Prologue

Let me introduce you to [🎩 HipHub](https://github.com/mattcreager/hiphub) the example we'll be working with today and the soon-to-be easiest way to stay apprised of hip repos on GitHub, from the comfort of your favorite Slack channel.

### Before you begin

Come, build along-side me. Here's what you'll need:

- A (free) [Heroku account](https://signup.heroku.com)
- The [Heroku Toolbelt](https://toolbelt.heroku.com)
- A Slack team to abuse
- Node (5.7.* preferably)
- The burning desire to scream [IT'S ALIVE](https://media.giphy.com/media/YEL7FJP6ed008/giphy.gif).

> This guide bounces between Slack, Heroku and your local development machine— so I've prefixed the sub-titles with the applicable logo where appropriate.

### <img src="https://upload.wikimedia.org/wikipedia/en/7/76/Slack_Icon.png" alt="Slack Icon" style="width: 15px;"/> Creating a custom Slack integration

Slack supports two types of integration: One designed to be operated as a service and listed in Slack's [App Directory] like [Heroku's](https://slack.com/apps/A0F7VRF7E-heroku), and the other a [custom integration](https://slack.com/apps/build) designed explicitly for your team. Either could be deployed on Heroku, but today we're going to tackle the latter, though I will show you how to easily distribute your bot using the Heroku Button.

Now visit [`slack.com/apps/build`](https://slack.com/apps/build) and select "Make a Custom Integration" as seen below.

{{ INSERT SCREENSHOT 1 HERE }}

## Publishing Notifications to Slack

While publishing notifications to Slack is the simplest form of integration, it's still pretty-darn cool, especially with a sprinkling of [Heroku Add-ons](https://elements.heroku.com/addons). Let's show HipHub how to find [trending GitHub projects](https://github.com/trending) and publish them to a Slack channel every morning using the [BotKit](http://howdy.ai/botkit/docs/) framework by the folks at [Howdy.ai](http://howdy.ai).

### <img src="https://upload.wikimedia.org/wikipedia/en/7/76/Slack_Icon.png" alt="Slack Icon" style="width: 15px;"/> Setup an "Incoming WebHook" on Slack

Slack will provide us with the API endpoint, or webhook; later, we'll `POST` data to this endpoint. Select "Incoming WebHooks" and choose a channel.

{{ INSERT SCREENSHOT 2 HERE -- select incoming webhooks }}

_In case you skipped the prologue, the selection above can be found at {your-team}.slack.com/apps/build/custom-intergration_

{{ INSERT SCREENSHOT 3 HERE -- choose a channel }}

You're the proud new owner of a Slack "Incoming WebHook". The configuration page includes a lot of great information about formatting and delivering messages to your new webhook, but what we need first is the "Webhook URL". It should look something like this: `https://hooks.slack.com/services/T0..LN/B0..VV1/br..dd`

Have that? 👏 Now—move along.

### <img src="http://simpleicon.com/wp-content/uploads/Code-Optimization-256x256.png" alt="Code Icon" style="width: 20px;"/> Fetch trending open-source projects from GitHub


```js
 // code goes here
```

### <img src="http://simpleicon.com/wp-content/uploads/Code-Optimization-256x256.png" alt="Code Icon" style="width: 20px;"/> Fetch trending open-source projects from GitHub


## Receiving and Responding to `/slash` Commands

## Connecting a Bot to the Slack RTM API

## Share Your Bot with the Heroku Button

## Epilogue
