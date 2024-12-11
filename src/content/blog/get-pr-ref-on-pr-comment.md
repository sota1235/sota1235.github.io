---
title: 'GitHub Actionsのissue_commentイベントでPRのhead_refを取得する'
description: 'GitHub Actionsのissue_commentイベントでPRのhead_refを取得する方法を紹介します'
pubDate: '2024/12/11'
---

# GitHub Actionsのissue_commentイベントでPRのリファレンスを取得する

## 何がしたいか

Pull Requestに何かしらのコメントが投稿された時にGitHub Actionsを発火し、その際にそのPRのリファレンスを取得したい。

具体的なユースケースはさておき、やる機会があったのでメモしておく。

## そもそも`issue_comment` eventとは

詳しくは[ドキュメント](https://docs.github.com/ja/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#issue_comment)をという感じですが、issueもしくはPull Requestのコメントの投稿、編集、削除をhookに発火するGitHub Actionsのevent。

`issue_commnet`という名前なのにPull Requestを内包してるのは内部の実装事情かなと勝手に思ってる。一応[`pull_request_comment`](https://docs.github.com/ja/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#pull_request_comment-use-issue_comment)ってeventもドキュメントには記載があるが`issue_comment`を使え的なことが書いてある(ように見える)。

## 方針

なぜわざわざ記事にするかというと、なるべく依存等々をせずに済ませたいのが理由。今回のことを実現する3rd party actionsは探せばあるんだけどやりたいことに対して冗長なことがほとんどだし一度使ったらバージョン管理しなきゃだし少なくとも業務で利用するには自分は微妙だと思ってる。

シンプルな構成で住むのであればそれに越したことはない。

## 手順

1. Pull Requestのコメントだけを対象にする
2. Pull Requestの番号を取得する
3. Pull Requestの番号をもとに`gh`コマンドでrefを取得する

## 結論

```yaml
name: Get head_ref on PR comment

on:
  issue_comment:
    types: [created]

jobs:
  get_pr_head_ref:
    name: prepare
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
    timeout-minutes: 3
    if: github.event.issue.pull_request != null # ①
    steps:
      - name: Get PR head ref
        id: pr_head_ref
        env:
          REPO_NAME: ${{ github.repository }}
          PR_NUMBER: ${{ github.event.issue.number }} # ②
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          # ③
          pr_head_ref=$(gh pr view "$PR_NUMBER" -R "$REPO_NAME" --json headRefName --jq .headRefName) 
          echo $pr_head_ref
```

①に関してはドキュメントに言及があるので読めばOKです。

https://docs.github.com/ja/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#issue_comment-on-issues-only-or-pull-requests-only

②、③のステップをわざわざ踏んでる理由は`issue_comment` eventのpayloadにPRのhead_refがないからです。ここの定義に関するドキュメントは見つけられなかったのですが、試しに`toJSON`等を使ってdumpすることで検証可能です。

なので`github.event.issue.number`を使ってPRの番号を取得し、それをもとに`gh`コマンドでrefを取得するステップを踏んでいます。

## おわりに

この仕組みなら一度書いてしまえばGitHub側に破壊的変更が入らない限りは困らないのかなと思います。誰かの参考になれば幸いです。