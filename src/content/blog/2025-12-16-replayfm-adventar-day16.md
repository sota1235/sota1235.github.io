---
title: '記事紹介 / Salesloft Trust Portal'
description: 'Replay.fm #52で紹介した記事の紹介です'
tag: [replayfm]
pubDate: '2025/12/16'
---

## この記事は

[Replay.fm Advent Calendar 2025](https://adventar.org/calendars/12418) 16日目の記事です。前日の記事は@yagihashの[Replay.fm Advent Calendar Day.15](https://sizu.me/yagihash/posts/aim4ovaxe5na)でした。

このアドベントカレンダーでは[Replay.fm](https://sota1235.notion.site/Replay-fm-5838061561c94a67b0ab0ede2ace2507?pvs=74)で2025/1~11の間、収録で読んだ記事のうちもう一度読み直したかったり紹介したい記事とかを取り上げます。

## 紹介したい記事

[Salesloft Trust Portal](https://trust.salesloft.com/?uid=Update+on+Mandiant+Drift+and+Salesloft+Application+Investigations)です。

記事というか、お知らせですかね。

### どんな記事か

[Salesloft](https://www.salesloft.com/)が提供する[Salesloft Drift](https://www.salesloft.com/platform/drift)という製品が侵害されたインシデントの調査結果のアップデートのお知らせです。

この記事だけだと正直、全体像が掴みづらいんでこの辺も併せて読むと輪郭を掴めます。

- [Salesloft: March GitHub repo breach led to Salesforce data theft attacks](https://www.bleepingcomputer.com/news/security/salesloft-march-github-repo-breach-led-to-salesforce-data-theft-attacks/)
- [GitHub Account Compromise Led to Salesloft Drift Breach Affecting 22 Companies](https://thehackernews.com/2025/09/github-account-compromise-led-to.html?m=1)
- [Breach of Salesloft Drift OAuth tokens leads to Salesforce data theft](https://www.nudgesecurity.com/post/breach-of-salesloft-drift-oauth-tokens-leads-to-salesforce-data-theft)

### 何が起きたのか

Salesloft DriftはSalesforceとOAuth連携して利用する製品です(※ 実際に使ったことがないので厳密に間違ってたらすいませんですが、インシデントを理解する上ではこれくらいの認識で大丈夫)。

このSalesloft Driftが侵害されたことにより、Salesforceへ接続できるOAuth認証の情報が漏洩しました。

それにより、SalesforceとSalesloft Driftの両方を使用している会社のSalesforceが侵害された、という事件です。

犯行はShinyHuntersによるものと考えられてるようです。

参考: [MITRE ATT&CK / Salesforce Data Exfiltration](https://attack.mitre.org/campaigns/C0059/)

### 原因

原因はSalesloft社のGitHubアカウント侵害のようです。

そこから初期侵入した上で長期間かけて潜伏・偵察を行い漏洩に至ったのが原因です。

### なんで紹介したかったか

攻撃内容はさることながら、個人的にびっくりしたのは被害範囲の広さと被害会社のラインナップです。

百聞は一見にしかずで、下記のサイトを見ると様子がわかると思います。

https://www.driftbreach.com/

Qualys, Elastic, JFront等々、有名な面々が被害に遭っています。

Cloudflareなんかは侵害された範囲について詳細なブログを出してくれています。

https://blog.cloudflare.com/response-to-salesloft-drift-incident/

全部の情報を追えてないのでなんともですが、侵害されたのはSalesforceに留まっていることからそこから横展開されて社内に侵害された、みたいなケースはなさそうで顧客情報の一部漏洩に留まっていそうではあります。

Cloudflareの例で言うと顧客情報と、顧客とやり取りする中でメッセージに含まれていたAPI tokenが漏洩対象となったため即座にrevokeをしたそうです。さすが。

### 自分ごととして考えると

この件を知って改めて思ったのは、クラウドサービスもやられる時はやられるよねぇということです。

今の時代、クラウドサービスやSaaSを使わずに仕事をするのはありえないです。一方で可能性としてはそこが侵害されて自社に影響が及ぶと言うことがあるわけで、そこでみんなリスクリターンの判断をしています。

そのリスクを測るために例えばSOC 2 Type Ⅱを取得してるかーとかISMS認証をとってるかー、とかを見るわけですが、今回侵害されたSalesloft社はその視点だと決して悪くない選択肢に見えます(実際、内部でどうかは見えませんが)。

https://www.salesloft.com/security-compliance

また、被害にあった会社一覧を見るとセキュリティに気を遣っている会社も多く見受けられ、それらの会社が導入を認めたサービスともいえます。

そこが実際に侵害された、というのは可能性としてはそうだよねと思いつつ、自分の身に実際に起きたら結構きついよなーと思った次第です。

## 明日は

奇数日なので@yagihash君です。風邪引きかけなんで気を引き締めて参ります。
