import React from "react";
import { Person, WebsiteType } from "../types";
import { Box } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import MastodonIcon from "@site/static/img/icons/mastodon.svg";

export const People: Record<string, Person> = {
  AlgentAlbrahimi: {
    description: () => <Box></Box>,
    matrix: "@algent:matrix.org",
    names: {
      first: "Algent",
      last: "Albrahimi",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/algent-al",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://fosstodon.org/@algent",
        type: WebsiteType.MASTODON,
      },
    ],
  },
  DavidHarder: {
    description: () => <Box></Box>,
    matrix: "@davidjharder:matrix.org",
    names: {
      first: "David",
      last: "Harder",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/davidjharder",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  EvanMaddock: {
    description: () => (
      <Box>
        Sci-fi and tech nerd who enjoys programming, woodworking, cooking, and other miscellaneous stuff. Not
        necessarily in that order.
      </Box>
    ),
    matrix: "@ebonjaeger:matrix.org",
    names: {
      first: "Evan",
      last: "Maddock",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/EbonJaeger",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://fosstodon.org/@EbonJaeger",
        type: WebsiteType.MASTODON,
      },
    ],
  },
  GavinZhao: {
    description: () => <Box></Box>,
    matrix: "@gzgavinzhao:matrix.org",
    names: {
      first: "Gavin",
      last: "Zhao",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/GZGavinZhao",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  HansKelson: {
    description: () => <Box></Box>,
    matrix: "@sheepman:m.stupid.frickin.website",
    names: {
      first: "Hans",
      last: "Kelson",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/sheepman4267",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  IkeyDoherty: {
    description: () => <Box></Box>,
    matrix: "@ikeydoherty:matrix.org",
    names: {
      first: "Ikey",
      last: "Doherty",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/ikeycode",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://fosstodon.org/@ikey",
        type: WebsiteType.MASTODON,
      },
    ],
  },
  JoeyRiches: {
    description: () => <Box></Box>,
    matrix: "@joebonrichie:matrix.org",
    names: {
      first: "Joey",
      last: "Riches",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/joebonrichie",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  JoshuaStrobl: {
    description: () => (
      <Box>🛠️ Founder / Lead of Buddies of Budgie. 🐧 Fedora Budgie Spin maintainer. Enjoyer of MMOs and whiskey.</Box>
    ),
    matrix: "@joshuastrobl:matrix.org",
    names: {
      first: "Joshua",
      last: "Strobl",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/JoshStrobl",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://joshuastrobl.social/@me",
        type: WebsiteType.MASTODON,
      },
      {
        icon: LanguageIcon,
        to: "https://joshuastrobl.com/",
        type: WebsiteType.WEBSITE,
      },
    ],
  },
  JustinZobel: {
    description: () => <Box></Box>,
    matrix: "@justin.zobel:kde.org",
    names: {
      first: "Justin",
      last: "Zobel",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/Justinzobel",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  ReillyBrogan: {
    description: () => <Box></Box>,
    matrix: "@reillybrogan:matrix.org",
    names: {
      first: "Reilly",
      last: "Brogan",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/ReillyBrogan",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  RuneMorling: {
    description: () => <Box></Box>,
    matrix: "@ermo:matrix.org",
    names: {
      first: "Rune",
      last: "Morling",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/ermo",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://fosstodon.org/@ermo",
        type: WebsiteType.MASTODON,
      },
    ],
  },
  SilkeHofstra: {
    description: () => <Box></Box>,
    matrix: "@silex:slxh.eu",
    names: {
      first: "Silke",
      last: "Hofstra",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/silkeh",
        type: WebsiteType.GITHUB,
      },
      {
        icon: LanguageIcon,
        to: "https://slxh.nl",
        type: WebsiteType.WEBSITE,
      },
    ],
  },
  ThomasStaudinger: {
    description: () => <Box></Box>,
    matrix: "@Staudey:matrix.org",
    names: {
      first: "Thomas",
      last: "Staudinger",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/Staudey",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://fosstodon.org/@staudey",
        type: WebsiteType.MASTODON,
      },
    ],
  },
  TraceyClark: {
    description: () => <Box></Box>,
    matrix: "@traceyc:matrix.org",
    names: {
      first: "Tracey",
      last: "Clark",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/TraceyC77",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://fosstodon.org/@TraceyC",
        type: WebsiteType.MASTODON,
      },
      {
        icon: LanguageIcon,
        to: "https://www.tlcnet.info",
        type: WebsiteType.WEBSITE,
      },
    ],
  },
  TroyHarvey: {
    description: () => <Box></Box>,
    matrix: "@harveydevel:matrix.org",
    names: {
      first: "Troy",
      last: "Harvey",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/HarveyDevel",
        type: WebsiteType.GITHUB,
      },
    ],
  },
  ZachBacon: {
    description: () => <Box></Box>,
    matrix: "@ZachBacon:matrix.org",
    names: {
      first: "Zach",
      last: "Bacon",
    },
    websites: [
      {
        icon: GitHubIcon,
        to: "https://github.com/ZachBacon",
        type: WebsiteType.GITHUB,
      },
      {
        icon: MastodonIcon,
        to: "https://mastodon.social/@thecanadianbacon",
        type: WebsiteType.MASTODON,
      },
      {
        icon: LanguageIcon,
        to: "https://casualgamer.ca",
        type: WebsiteType.WEBSITE,
      },
    ],
  },
};
