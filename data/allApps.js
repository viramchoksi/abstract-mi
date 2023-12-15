const allApps = [
    { title: 'Equilibrium', description: 'Autobalanced Portfolio', icon: '/images/equilibrium.svg' },
    { title: 'Stake2Talk', description: 'Get paid if someone wastes your time', icon: '/images/Stake2Talk.svg' },
    { title: 'P4id', description: 'Send payment requests in crypto', icon: '/images/P4id.svg' },
    { title: 'Wallet Assist', description: 'AI + Crypto', icon: '/images/Wallet.svg' },
    { title: 'Snackerino', description: 'Cosmos Snacks', icon: '/images/Snackerino.svg' },
    { title: 'Croncat', description: '1 click crypto automations', icon: '/images/Croncat.svg' }
];

export default allApps;


export const siteData = {
    header: {
        subTitle: 'INTERCHAIN APP PLATFORM',
        titleMeta: 'Personalized Apps for Web3 Power Users',
        title: <p className='text-center sm:text-[56px] text-2xl sm:leading-[62px] mt-2'>Personalized Apps <br />for Web3 Power Users</p>,
        description: 'It’s hard to find web3 apps that fit your exact needs. Abstract gives you personalized apps all in one place so you can save time and take back control over your web3 life.'
    },
    AllApps: {
        applications: [
            { title: 'Equilibrium', description: 'Autobalanced Portfolio', icon: '/images/equilibrium.svg' },
            { title: 'Stake2Talk', description: 'Get paid if someone wastes your time', icon: '/images/Stake2Talk.svg' },
            { title: 'P4id', description: 'Send payment requests in crypto', icon: '/images/P4id.svg' },
            { title: 'Wallet Assist', description: 'AI + Crypto', icon: '/images/Wallet.svg' },
            { title: 'Snackerino', description: 'Cosmos Snacks', icon: '/images/Snackerino.svg' },
            { title: 'Croncat', description: '1 click crypto automations', icon: '/images/Croncat.svg' }
        ],

    },
    discover: {
        title: 'Apps that make your web3 life easier',
        description: 'MINI APPS THAT SOLVE PROBLEMS SO YOU HAVE MORE TIME TO FOCUS ON WHAT MATTERS.',
        miniDescription: 'Modulized mini web3 apps',
        webApps: [
            {
                alt: 'equilibrium',
                src: '/images/equilibrium.svg',
            },
            {
                alt: 'P4id',
                src: '/images/star-app.svg'
            },
            {
                alt: 'wallet',
                src: '/images/m-app.svg'
            }
        ],
        firstContent: {
            subTitle: 'YOUR WEB3 APP STORE',
            title: <p className='text-2xl'>Discover new apps <br />that make your life easier</p>,
            description: 'Select from a variety of applications that enhance your daily crypto handling, from asset management to informed decision-making.'
        },
        secondContent: {
            subTitle: 'PERSONALIZED DEFI',
            title: 'Customized applications for your DeFi life',
            description: 'Engage with applications that align with your financial strategies, providing tools for asset growth.',
            mobileImage: '/images/glassCube.svg',
            desktopImage: '/images/stone.svg',
            alt: 'glass-cube',
        },
        thirdContent: {
            subTitle: 'ABSTRACT SDK',
            title: 'Develop full-stack apps with pre-audited modules',
            description: 'Using our pre-audited modules makes it easy and fast to build interchain apps.',
            mobileImage: '/images/metalBalls.svg',
            desktopImage: '/images/metalBalls.svg',
            alt: 'metal-balls',
        }
    },

};

const redirectionJson = {
    "Developers": {
        "On-Chain": {
            "explore": "https://console.abstract.money/modules",
            "resolve": "https://console.abstract.money/ans",
            "smart-wallets": "https://console.abstract.money/",
            "integrate": "https://docs.abstract.money/3_framework/6_module_types.html?highlight=adapter#adapters"
        },
        "Off-Chain": {
            "cw-orchestrator": "https://orchestrator.abstract.money",
            "API": "https://api.abstract.money"
        }
    },
    "Documentation": {
        "Get started building abstract apps": "https://www.youtube.com/@abstractmoney",
        "Documentation": "https://docs.abstract.money",
        "Github": "https://github.com/abstractsdk",
        "CosmWasm libraries and SDKs": "https://github.com/abstractsdk/abstract",
        "Modules": "https://github.com/AbstractSDK/abstract/tree/main/modules/contracts",
        "Example apps": "https://github.com/AbstractSDK/abstract/tree/main/modules/contracts/apps",
        "Frontend SDK": "https://github.com/AbstractSDK/abstract.js",
        "Abstract API": "https://api.abstract.money"
    },
    "Integrations": {
        "Dexes": {
            "Osmosis": "https://app.osmosis.zone",
            "kujira": "https://kujira.app",
            "astroport": "https://astroport.fi",
            "astrovault": "https://astrovault.io",
            "wynd": "https://wynddao.io"
        },
        "Chains": {
            "Neutron": "find neutron chain link",
            "Terra": "https://terra.money",
            "Osmosis": "https://osmosis.zone",
            "Kujira": "https://neutron.org",
            "Sei": "https://sei.io",
            "DoraVota": "https://vota-explorer.dorafactory.org",
            "Juno": "https://junonetwork.io"
        }
    }
};