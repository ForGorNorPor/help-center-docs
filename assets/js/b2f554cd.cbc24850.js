"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"dont-call-me-mate-pal","metadata":{"permalink":"/blog/dont-call-me-mate-pal","source":"@site/devlog/2024-01-29-dont-call-me-mate.md","title":"Don\'t call me MATE, pal!","description":"Back in our 4.4 release post we announced that Solus would stop shipping a MATE ISO, mostly because MATE showed no signs of moving away from X11 and towards wayland. At the beginning of this year, we shipped our new XFCE ISO as a beta. And now we\'re getting ready to ship the Solus MATE Transition Tool to move existing users off of MATE.","date":"2024-01-29T00:00:00.000Z","formattedDate":"January 29, 2024","tags":[{"label":"MATE","permalink":"/blog/tags/mate"},{"label":"devlog","permalink":"/blog/tags/devlog"},{"label":"solus","permalink":"/blog/tags/solus"}],"readingTime":2.645,"hasTruncateMarker":true,"authors":[{"name":"David Harder","title":"Solus Staff","url":"https://github.com/davidjharder","image_url":"https://avatars.githubusercontent.com/u/23007135?v=4","imageURL":"https://avatars.githubusercontent.com/u/23007135?v=4"}],"frontMatter":{"title":"Don\'t call me MATE, pal!","slug":"dont-call-me-mate-pal","authors":[{"name":"David Harder","title":"Solus Staff","url":"https://github.com/davidjharder","image_url":"https://avatars.githubusercontent.com/u/23007135?v=4","imageURL":"https://avatars.githubusercontent.com/u/23007135?v=4"}],"tags":["MATE","devlog","solus"],"hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"eopkg is dead, long live eopkg","permalink":"/blog/eopkg-is-dead-long-live-eopkg"}},"content":"Back in our [4.4 release post](https://getsol.us/2023/07/08/solus-4-4-released/) we announced that Solus would stop shipping a MATE ISO, mostly because MATE showed no signs of moving away from X11 and towards wayland. At the beginning of this year, we shipped our new XFCE ISO as a beta. And now we\'re getting ready to ship the _Solus MATE Transition Tool_ to move existing users off of MATE.\\n\\n\x3c!-- truncate --\x3e\\n\\n## The problem\\n\\nMATE and XFCE are similar enough that eager Solusians can (and have) installed XCFE on their MATE machines with nothing more than a couple of `eopkg` commands. We\'re pretty sure our resident `bash` script enthusiast (ermo) could hammer out a working transition script in an evening. But we want a more polished experience. We know *you* follow Solus news; after all, you\'re reading this. However, we assume there are users who dutifully update their systems, but have no interest in keeping up with our blog posts. How do we get their attention and prompt them to move away from MATE?\\n\\n## Introducing the Solus MATE Transition Tool\\n\\nWe\'re pleased to show off the _MATE Transition Tool_, which we plan to include in normal updates to MATE systems in the coming weeks. Most of the work on this tool was done by Joey; more on his efforts in the section below. Here\'s how MATE users will encounter the tool:\\n\\n:::note\\n\\nThese screenshots are current as of the publishing of this post, we may change things as we continue testing.\\n\\n:::\\n\\n1. Users will get a notification on every start-up informing them that they need to transition away from MATE.\\n\\n![Notification: Solus Transition Service](img/2024-01-29-dont-call-me-mate/notification.png)\\n\\n2. Clicking on that notification will launch the Solus MATE Transition Tool.\\n\\n![MATE Transition Tool Launch](img/2024-01-29-dont-call-me-mate/MTT-launch.png)\\n\\n3. Users select either Solus Budgie or Solus XFCE. The tool installs the selected edition, removes MATE, and prompts for a reboot\\n4. The tool removes itself after a successful transition.\\n\\nSimple. At least, that\'s what we want users to think.\\n\\n## How the Mate Transition Tool is actually part of our Python2 work\\n\\nThe story of the MATE Transition Tool is actually tied up in our fight to drag `eopkg` into the current decade. As I wrote previously, we\'re somewhat embarrassed by the amount of Solus tooling which _still_ relies on Python2. One such tool is the Solus Software Center `solus-sc`. A while back, the team decided the sane thing to do was to ditch `solus-sc` in favor of _KDE Discover_ and _GNOME Software_ . This would have the additional benefit of promoting flatpak applications to first-class citizens. The problem is _Discover_ and _Software_ have no way to talk to our package manager `eopkg`. we need an API. Luckily, other projects have encountered the same issue, leading to [`packagekit`](https://www.freedesktop.org/software/PackageKit/pk-intro.html).\\n\\nJoey has been doing the dirty work of bolting `packagekit` support onto `eopkg`, and saw an opportunity: If `eopkg` could be upgraded to understand some of `packagekit`, then he could write a special-purpose application to move users off MATE without asking them to run scary bash scripts (sorry ermo). We\'re rather pleased with this solution. MATE users get a simple transition and Solus gets closer to checking `solus-sc` off [the list.](https://github.com/getsolus/packages/issues/270)"},{"id":"eopkg-is-dead-long-live-eopkg","metadata":{"permalink":"/blog/eopkg-is-dead-long-live-eopkg","source":"@site/devlog/2024-01-19-eopkg-is-dead.md","title":"eopkg is dead, long live eopkg","description":"Close watchers of our packages repository may have noticed some strange looking items:","date":"2024-01-19T00:00:00.000Z","formattedDate":"January 19, 2024","tags":[{"label":"eopkg","permalink":"/blog/tags/eopkg"},{"label":"devlog","permalink":"/blog/tags/devlog"},{"label":"moss","permalink":"/blog/tags/moss"},{"label":"solus","permalink":"/blog/tags/solus"}],"readingTime":1.64,"hasTruncateMarker":true,"authors":[{"name":"David Harder","title":"Solus Staff","url":"https://github.com/davidjharder","image_url":"https://avatars.githubusercontent.com/u/23007135?v=4","imageURL":"https://avatars.githubusercontent.com/u/23007135?v=4"}],"frontMatter":{"title":"eopkg is dead, long live eopkg","slug":"eopkg-is-dead-long-live-eopkg","authors":[{"name":"David Harder","title":"Solus Staff","url":"https://github.com/davidjharder","image_url":"https://avatars.githubusercontent.com/u/23007135?v=4","imageURL":"https://avatars.githubusercontent.com/u/23007135?v=4"}],"tags":["eopkg","devlog","moss","solus"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Don\'t call me MATE, pal!","permalink":"/blog/dont-call-me-mate-pal"},"nextItem":{"title":"Welcome to the Solus Devlog","permalink":"/blog/welcome-solus-devlog-v1"}},"content":"Close watchers of our [packages repository](https://github.com/getsolus/packages) may have noticed some strange looking items:\\n\\n- [Initial inclusion of eopkg4-bin](https://github.com/getsolus/packages/pull/1305)\\n- [Testing the eopkg4-bin package](https://github.com/getsolus/packages/issues/1316) Warning: Minions GIF\\n\\nIt\'s a long story.\\n\\n\x3c!-- truncate --\x3e\\n\\nOur package manager `eopkg` is written in Python2. Python2 was originally planned to hit end-of-life all the way back in 2015! So Solus contributors past and present have wrestled with three thorny issues:\\n\\n- Do we really want to just port `eopkg` to python3? Surely we could build something newer and shinier.\\n- How exactly do we want to port `eopkg` to Python3? (We\'ll call this ported version `eopkg3` for short)\\n- How do make sure `eopkg3` works even if something goes wrong with the Python3 libraries on someone\'s machine?\\n\\nHere\'s the plan to solve this: Ikey and friends over at Serpent OS are actively building a new package manager [_moss_](https://github.com/serpent-os/moss) that we are excited about. And they\'re building it with Solus in mind as an eventual user. This will be our fix for the first problem. In the meantime, we\'re taking a pragmatic approach to the last two issues so that (frankly) we can do more exciting things.\\n\\nSheepman, Livingsilver, and others completed a [direct Python3 port](https://github.com/getsolus/eopkg/commits/python3), which we never expect our users to actually run directly like a traditional Python program. Instead, that port will be compiled into a _binary_ using [nuitka](https://nuitka.net/doc/download.html). We\'re calling this compiled `eopkg3` binary `eopkg4-bin` for now. Critically, this binary will have _no dependencies_ other than `libc`. If we can successfully swap `eopkg` with `eopkg4-bin` on user\'s machines, then we\'ve solved the last issue: Python3 can be updated without worrying about also wrecking the package manager. Got it?\\n\\nBut what about Python2? Well, now that Evan and Joey have seen off a [successful ISO release](https://getsol.us/2024/01/08/solus-4-5-released/) with a `calamares` based installer, we can cross `os-installer` [off the list](https://github.com/getsolus/packages/issues/270). And `eopkg4-bin` will let us cross off a whole bunch more. The rest of that list is a story for another day."},{"id":"welcome-solus-devlog-v1","metadata":{"permalink":"/blog/welcome-solus-devlog-v1","source":"@site/devlog/2024-01-13-welcome-devlog.md","title":"Welcome to the Solus Devlog","description":"Welcome to the Solus Development Log.","date":"2024-01-13T00:00:00.000Z","formattedDate":"January 13, 2024","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"devlog","permalink":"/blog/tags/devlog"},{"label":"firstpost","permalink":"/blog/tags/firstpost"},{"label":"solus","permalink":"/blog/tags/solus"}],"readingTime":0.9,"hasTruncateMarker":true,"authors":[{"name":"Joey Riches","title":"Solus Staff","url":"https://github.com/joebonrichie","image_url":"https://avatars.githubusercontent.com/u/5338090?s=400&u=f77ed45c7e83814ce3e8bd199fc293bd5b53682b&v=4","imageURL":"https://avatars.githubusercontent.com/u/5338090?s=400&u=f77ed45c7e83814ce3e8bd199fc293bd5b53682b&v=4"}],"frontMatter":{"title":"Welcome to the Solus Devlog","description":"Welcome to the Solus Development Log.","slug":"welcome-solus-devlog-v1","authors":[{"name":"Joey Riches","title":"Solus Staff","url":"https://github.com/joebonrichie","image_url":"https://avatars.githubusercontent.com/u/5338090?s=400&u=f77ed45c7e83814ce3e8bd199fc293bd5b53682b&v=4","imageURL":"https://avatars.githubusercontent.com/u/5338090?s=400&u=f77ed45c7e83814ce3e8bd199fc293bd5b53682b&v=4"}],"tags":["hello","devlog","firstpost","solus"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"eopkg is dead, long live eopkg","permalink":"/blog/eopkg-is-dead-long-live-eopkg"}},"content":"Welcome to the Solus Development Log.\\n\\nThe Solus Development Log will be used by Solus Staff and outside contributors to highlight wins and changes in Solus. Keep an eye on this space.\\n\\n\x3c!-- truncate --\x3e\\n\\nThe Solus DevLog has been setup to facilitate improved communication with the outside world; wins, significant changes, as well as challenges, within Solus. Solus Staff and contributors are encouraged to use this space.\\n\\nThe DevLog has been setup as a separate entity to the [Solus Blog](https://getsol.us/blog/) to encourage more short form development content that doesn\'t require the same level of polish as an official blog post.\\n\\nIt is hoped that this will be used to help communicate what\'s going on in Solus such that our short-term and medium-term progress, goals, and ambitions are less of a black box to the outside world.\\n\\nAdditionally, we believe it will help provide context to any of our murmurings for any users who keep an eye on the [getsolus](https://github.com/getsolus/) GitHub organization page and the [Solus](https://matrix.to/#/#solus:matrix.org) Matrix channels.\\n\\nHope to see you back at this space soon with more content!"}]}')}}]);