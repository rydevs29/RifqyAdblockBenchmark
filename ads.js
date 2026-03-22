const testGroups = {
    "Advertising": [
        // Google & DoubleClick
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
        "https://adservice.google.com/adsid/integrator.js",
        "https://tpc.googlesyndication.com/simgad/",
        "https://partner.googleadservices.com/gampad/cookie.js",
        "https://stats.g.doubleclick.net/dc.js",
        "https://bid.g.doubleclick.net",
        // Amazon
        "https://z-na.amazon-adsystem.com/widgets/onejs",
        "https://c.amazon-adsystem.com/aax2/apstag.js",
        "https://s.amazon-adsystem.com/iu3",
        // Programmatic, SSPs, DSPs, & Exchanges
        "https://ib.adnxs.com/ut/v3/prebid",
        "https://js.indexww.com/ht/p/",
        "https://secure.quantserve.com/quant.js",
        "https://rules.quantcount.com/rules-p.js",
        "https://pixel.rubiconproject.com/exchange/sync.php",
        "https://fastlane.rubiconproject.com",
        "https://simage2.pubmatic.com/AdServer/js/pwt/156407/2691/pwt.js",
        "https://as.casalemedia.com/cygnus",
        "https://bidder.criteo.com/cdb",
        "https://rtb.criteo.com/delivery/rta/rta.js",
        "https://ad.smaato.net/",
        "https://cdn.flashtalking.com/frameworks/js/api/2/10/html5API.js",
        "https://ad.yieldmanager.com",
        "https://bs.serving-sys.com/Serving",
        "https://cdn.chitika.net/getads.js",
        "https://ad.turn.com/r/cs",
        // Native Ads
        "https://cdn.taboola.com/libtrc/unip/trc.js",
        "https://widgets.outbrain.com/outbrain.js",
        "https://zn.outbrain.com/images/ajax/action.gif",
        // Others
        "https://bat.bing.com/bat.js",
        "https://ads.yahoo.com/cms/v1",
        "https://static.ads-twitter.com/uwt.js"
    ],
    "Analytics & Tracking": [
        // Standard Analytics
        "https://www.google-analytics.com/analytics.js",
        "https://www.googletagmanager.com/gtag/js",
        "https://ssl.google-analytics.com/__utm.gif",
        "https://mc.yandex.ru/metrika/tag.js",
        "https://mc.yandex.ru/watch/",
        // Heatmaps & Session Recording
        "https://static.hotjar.com/c/hotjar.js",
        "https://script.hotjar.com/modules.c1c11d2757279767.js",
        "https://cdn.mouseflow.com/projects/test.js",
        "https://cdn.fullstory.com/s/fs.js",
        "https://rec.smartlook.com/recorder.js",
        "https://www.clarity.ms/tag/example",
        "https://script.crazyegg.com/pages/scripts/0000/0000.js",
        // Product & Event Tracking
        "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js",
        "https://api.mixpanel.com/track",
        "https://cdn.segment.com/analytics.js/v1/test/analytics.min.js",
        "https://api.segment.io/v1/p",
        "https://cdn.amplitude.com/libs/amplitude-8.0.0-min.gz.js",
        "https://api.amplitude.com/",
        "https://heapanalytics.com/js/bind.js",
        // Mobile/App Attribution via Web
        "https://app.appsflyer.com",
        "https://app.adjust.com",
        "https://api.branch.io/v1/url",
        "https://cdn.branch.io/branch-latest.min.js",
        // Error & Performance Monitoring (Often blocked due to user tracking)
        "https://browser.sentry-cdn.com/bundle.min.js",
        "https://cdn.logrocket.io/logrocket.min.js",
        "https://bam.nr-data.net/1/test",
        "https://browser-intake-datadoghq.com/api/v2/logs",
        "https://in.appcenter.ms/logs",
        // Pingers
        "https://sb.scorecardresearch.com/beacon.js",
        "https://ping.chartbeat.net/ping"
    ],
    "Social Pixels": [
        // Meta / Facebook
        "https://connect.facebook.net/en_US/fbevents.js",
        "https://www.facebook.com/tr/",
        // TikTok
        "https://analytics.tiktok.com/i18n/pixel/sdk.js",
        "https://analytics.tiktok.com/api/v2/pixel",
        // Snapchat
        "https://sc-static.net/scevent.min.js",
        "https://tr.snapchat.com/cm/i",
        // X / Twitter
        "https://platform.twitter.com/oct.js",
        "https://analytics.twitter.com/i/adsct",
        "https://syndication.twitter.com/i/jot",
        // LinkedIn
        "https://snap.licdn.com/li.lms-analytics/insight.min.js",
        "https://px.ads.linkedin.com/collect",
        // Pinterest
        "https://s.pinimg.com/ct/core.js",
        "https://ct.pinterest.com/v3/",
        // Others
        "https://www.redditstatic.com/ads/pixel.js",
        "https://q.quora.com/_/ad/script",
        "https://vk.com/rtrg",
        "https://line.me/R/msg/"
    ],
    "Pop-ups & Annoyances": [
        "https://onclickads.net/a/display.php",
        "https://yllix.com/wp-content/themes/yllix/assets/js/scripts.js",
        "https://popads.net/main/app.js",
        "https://engine.adzerk.net/ados.js",
        "https://s.clickadu.com/s/invoke.js",
        "https://ad.propellerads.com/js/pop.js",
        "https://zone.propush.me/sw.js",
        "https://a.exdynsrv.com/pop.js",
        "https://syndication.exoclick.com/ads.js",
        "https://adcash.com/script/java.php",
        "https://go.onclasrv.com/apu.php",
        "https://a.realsrv.com/popin/v1/api/",
        "https://js.wpushsdk.com/s/sw.js",
        "https://cdn.adpushup.com/test.js",
        "https://popcash.net/pop.js",
        "https://admaven.com/js/app.js",
        "https://cdn.kiosked.com/kiosked.js",
        "https://my.rtmark.net/p.js"
    ],
    "Crypto Miners": [
        // Note: Many of these are defunct in the real world, but standard for testing blocklist rules
        "https://coin-hive.com/lib/coinhive.min.js",
        "https://api.coin-hive.com/miner",
        "https://pool.coinhive.com/proxy",
        "https://authedmine.com/lib/authedmine.min.js",
        "https://crypto-loot.com/lib/miner.js",
        "https://crypto-loot.com/proxy",
        "https://load.jsecoin.com/load/test",
        "https://jsecoin.com/server/auth",
        "https://webminepool.com/lib/base.js",
        "https://monerominer.rocks/miner.php",
        "https://cnhv.co/miner.js",
        "https://cdn.minr.pw/miner.min.js",
        "https://statty.info/miner.js",
        "https://cloud-miner.eu/miner.js",
        "https://party-miner.com/lib.js",
        "https://mine.bittubeapp.com/tube.js"
    ],
    "Adult Ads": [
        "https://as.sexad.net/js/abc.js",
        "https://creative.trafficjunky.com/p/top.js",
        "https://pt.trafficstars.com/api/v1/ad-tag.js",
        "https://cdn.trafficstars.com/sdk/v1/bi.js",
        "https://cdn.exoclick.com/ads.js",
        "https://syndication.exoclick.com/splash.php",
        "https://ad.ero-advertising.com/ad.js",
        "https://adserver.juicyads.com/js/jads.js",
        "https://track.plugrush.com/pr.js",
        "https://syndication.realsrv.com/splash.php",
        "https://s.magsrv.com/v1/ad",
        "https://cdn.multiplayerads.com/script.js",
        "https://creative.stripchat.com/tags/test.js",
        "https://banners.chaturbate.com/affiliates/b.js",
        "https://ad.doublepimp.com/ad.js",
        "https://a.medleyads.com/b/test",
        "https://js.ad-center.com/c/test",
        "https://www.awempire.com/js/promo.js",
        "https://promos.crakrevenue.com/scripts/smartlink.js"
    ]
};
