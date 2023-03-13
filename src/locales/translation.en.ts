export default {
    'app.name': 'Create Paper Wallet',

    // --------------------------------------------------

    'buttons.copyText': 'Copy text',
    'buttons.selectText': 'Select text',
    'buttons.qrCode': 'QR Code',

    // --------------------------------------------------

    'network': 'Coin',

    // --------------------------------------------------

    'connection.label': 'Network connection',

    'connection.online.text': 'Online',
    'connection.online.color': 'green.500',

    'connection.offline.text': 'Offline',
    'connection.offline.color': 'red.500',

    // --------------------------------------------------

    'addresses.path': 'Path',
    'addresses.address': 'Address',
    'addresses.publicKey': 'Public Key',
    'addresses.privateKey': 'Private Key',

    // --------------------------------------------------

    'paperWallet.spend': 'SPEND',
    'paperWallet.loadAndVerify': 'LOAD & VERIFY',

    // --------------------------------------------------

    'walletSimple.title': 'Simple Wallet',
    'walletSimple.navTitle': 'Simple Wallet',

    'walletSimple.meta.title': 'Simple Wallet',
    'walletSimple.meta.description': 'Create a single wallet or multiple wallets.',

    'walletSimple.description': `
        Our objective is to provide a safe, practical and free way to create cryptocurrency wallets for the website
        user. It is possible to create wallets from different networks in a single environment, thus facilitating the
        management of your wallets, without having to use other platforms to create these wallets, using a single
        website for this intend. <br />
        The wallet generation platform runs locally for the user, and it is strongly recommended to be used offline,
        without any internet connection, exponentially increasing the security and privacy of those who use <0>Create
        Paper Wallet</0>.`,

    'walletSimple.warning': `
        <0>Warning:</0> For your security, create your wallets only when you are disconnected from the internet,
        ensuring that you are the only one who has access to the keys provided. The keys must be kept by you and no one
        else.`,

    // --------------------------------------------------

    'walletSimple.config.quantity': 'Number of wallets to be created',
    'walletSimple.config.quantity_short': 'Number of wallets',

    'walletSimple.config.errors.invalidQuantity': 'Quantity cannot be lower than 1',

    // --------------------------------------------------

    'walletSimple.controls.generate': 'Generate',
    'walletSimple.controls.cancel': 'Cancel',

    // --------------------------------------------------

    'walletSimple.addresses.title': 'Addresses',

    // --------------------------------------------------

    'walletAdvanced.title': 'Advanced Wallet',
    'walletAdvanced.navTitle': 'Advanced Wallet',

    'walletAdvanced.meta.title': 'Advanced Wallet',
    'walletAdvanced.meta.description': 'Generate, customize or recover an HD wallet.',

    'walletAdvanced.description.text': `
        A hierarchical-deterministic (HD) wallet can generate a new key pair from a master key pair for each crypto
        transaction to enhance privacy and security. Its hierarchical structure resembles that of a tree, with the
        master key “determining” the key pairs that follow it in the hierarchy. HD wallets have multi-currency support
        and can be restored with a recovery phrase, the mnemonics.`,

    'walletAdvanced.description.options': `
        Check what you would like to customize and proceed to the wallet configuration.`,

    // --------------------------------------------------

    'walletAdvanced.options.bip39': 'Mnemonics (BIP39)',
    'walletAdvanced.options.masterKey': 'HD Master Keys (BIP32)',
    'walletAdvanced.options.bip85': 'Derived Entropy (BIP85)',
    'walletAdvanced.options.derivation': 'Address Derivation Path',
    'walletAdvanced.options.addresses': 'Derived Addresses',

    'walletAdvanced.options.customize': 'Customize',

    // --------------------------------------------------

    'walletAdvanced.settings.title': 'Wallet Settings',

    // --------------------------------------------------

    'walletAdvanced.controls.generate': 'Generate',
    'walletAdvanced.controls.cancel': 'Cancel',

    // --------------------------------------------------

    'walletAdvanced.bip39.language': 'BIP39 Mnemonic Language',
    'walletAdvanced.bip39.language_short': 'Mnemonic Language',

    'walletAdvanced.bip39.mnemonic': 'BIP39 Mnemonic',
    'walletAdvanced.bip39.mnemonic_short': 'Mnemonic',

    'walletAdvanced.bip39.generate': 'Generate',

    'walletAdvanced.bip39.passphrase': 'BIP39 Passphrase',
    'walletAdvanced.bip39.passphrase_short': 'Passphrase',

    'walletAdvanced.bip39.passphrase.show': 'Show',
    'walletAdvanced.bip39.passphrase.hide': 'Hide',

    'walletAdvanced.bip39.seed': 'BIP39 Seed',
    'walletAdvanced.bip39.seed_short': 'Seed',

    'walletAdvanced.bip39.errors.invalidMnemonic': 'Invalid mnemonic',
    'walletAdvanced.bip39.errors.invalidSeed': 'Invalid seed',

    // --------------------------------------------------

    'walletAdvanced.keys.root.private': 'BIP32 Master Private Key',
    'walletAdvanced.keys.root.private_short': 'Master Private Key',

    'walletAdvanced.keys.account.private': 'Account Extended Private Key',
    'walletAdvanced.keys.account.public': 'Account Extended Public Key',

    'walletAdvanced.keys.extended.private': 'BIP32 Extended Private Key',
    'walletAdvanced.keys.extended.private_short': 'Extended Private Key',

    'walletAdvanced.keys.extended.public': 'BIP32 Extended Public Key',
    'walletAdvanced.keys.extended.public_short': 'Extended Public Key',

    'walletAdvanced.keys.errors.invalidRoot': 'Invalid Master Key',

    // --------------------------------------------------

    'walletAdvanced.bip85.application': 'BIP85 Application',
    'walletAdvanced.bip85.application_short': 'Application',

    'walletAdvanced.bip85.index': 'BIP85 Index',
    'walletAdvanced.bip85.index_short': 'Index',

    'walletAdvanced.bip85.childKey': 'BIP85 Child Key',
    'walletAdvanced.bip85.childKey_short': 'Child Key',

    'walletAdvanced.bip85.bip39.language': 'BIP85 Mnemonic Language',
    'walletAdvanced.bip85.bip39.language_short': 'Mnemonic Language',

    'walletAdvanced.bip85.bip39.length': 'BIP85 Mnemonic Length',
    'walletAdvanced.bip85.bip39.length_short': 'Mnemonic Length',

    'walletAdvanced.bip85.bip39.length.12': '12 words',
    'walletAdvanced.bip85.bip39.length.18': '18 words',
    'walletAdvanced.bip85.bip39.length.24': '24 words',

    'walletAdvanced.bip85.hex.bytes': 'BIP85 Bytes',
    'walletAdvanced.bip85.hex.bytes_short': 'Bytes',

    'walletAdvanced.bip85.errors.invalidIndex': 'Index cannot be lower than 0',
    'walletAdvanced.bip85.errors.invalidBytes': 'Bytes cannot be lower than 16 or higher than 64',

    // --------------------------------------------------

    'walletAdvanced.derivation.path': 'BIP32 Derivation Path',
    'walletAdvanced.derivation.path_short': 'Derivation Path',

    'walletAdvanced.derivation.extendedKey.private': 'Extended Private Key',
    'walletAdvanced.derivation.extendedKey.public': 'Extended Public Key',

    'walletAdvanced.derivation.errors.invalidPath': 'Invalid path',

    // --------------------------------------------------

    'walletAdvanced.addresses.title': 'Derived Addresses',

    'walletAdvanced.addresses.quantity': 'Number of addresses to generate',
    'walletAdvanced.addresses.quantity_short': 'Number of addresses',

    'walletAdvanced.addresses.startingIndex': 'Starting index of the generated addresses',
    'walletAdvanced.addresses.startingIndex_short': 'Starting index',

    'walletAdvanced.addresses.useHardened': 'Generate addresses using hardened derivation',
    'walletAdvanced.addresses.useHardened_short': 'Use hardened derivation',

    'walletAdvanced.addresses.errors.quantityLowerThan1': 'Quantity cannot be lower than 1',
    'walletAdvanced.addresses.errors.startingIndexLowerThan0': 'Starting index cannot be lower than 0',

    // --------------------------------------------------

    'vanity.title': 'Vanity Address',
    'vanity.navTitle': 'Vanity Address',

    'vanity.meta.title': 'Vanity Address',
    'vanity.meta.description': 'Generate a simple wallet address which the starting or ending is chosen by you.',

    'vanity.description.title': 'Vanity Generator Options',
    'vanity.description.text': `
        The wallet generation process happens locally in your device, <0>Create Paper Wallet</0> can not get any
        information from it.`,

    // --------------------------------------------------

    'vanity.config.value': 'Vanity string',
    'vanity.config.caseSensitive': 'Case-sensitive',

    'vanity.config.mode': 'Mode',
    'vanity.config.mode.prefix': 'Prefix',
    'vanity.config.mode.suffix': 'Suffix',

    'vanity.config.threads': 'Number of threads to use when generating addresses',
    'vanity.config.threads_short': 'Threads',
    'vanity.config.threads.increment': 'Increment',
    'vanity.config.threads.decrement': 'Decrement',

    'vanity.config.errors.invalidValue': 'Invalid value',
    'vanity.config.errors.invalidValue_hex': 'Invalid value: it must be in hex format (only a-f, A-F, 0-9)',

    // --------------------------------------------------

    'vanity.controls.start': 'Start',
    'vanity.controls.stop': 'Stop',

    // --------------------------------------------------

    'vanity.statistics.difficulty': 'Difficulty',
    'vanity.statistics.generated': 'Generated',
    'vanity.statistics.probability50': '50% Probability',

    'vanity.statistics.addresses50_one': '1 address',
    'vanity.statistics.addresses50_other': '{{addr}} addresses',
    'vanity.statistics.addresses50.impossible': 'Nearly impossible',

    'vanity.statistics.time50.thousandsOfYears': 'Thousands of years',

    'vanity.statistics.speed': 'Speed',
    'vanity.statistics.speed.addressPerSecond': '{{rate}} addr/s',

    // --------------------------------------------------

    'vanity.result.privateKey.toggle': 'Click to reveal',

    // --------------------------------------------------

    'home.meta.title': '',
    'home.meta.description': `
        Create Paper Wallet is a decentralized system that allows you to create wallets and customize or recover them,
        when possible.`,

    'home.startNow': 'START NOW',

    'home.simple.description': 'Create a single wallet or multiple wallets',
    'home.advanced.description': 'Generate, customize or recover an HD wallet',
    'home.vanity.description': 'The starting or ending is chosen by you',

    // --------------------------------------------------

    'info.title': 'What is a Paper Wallet',
    'info.navTitle': 'More Information',

    'info.meta.title': 'What is a Paper Wallet',
    'info.meta.description': 'Learn more about paper wallets and how they can help you secure your cryptocurrencies.',

    'info.description': `
        A paper wallet is considered a secure way to store large amounts of cryptocurrencies. It works as a form of
        protection, mainly against hacker attacks and possible system failures.
        <br />
        However, even though it is considered a safe way to store large amounts, it is necessary to follow a series of
        security measures so that cryptocurrencies are really preserved.
        <br />
        Despite Bitcoin being the most famous cryptocurrency, there are digital currency wallets of several types, with
        similar modes of operation.
        <br />
        Basically, the paper wallet is a way to store digital currencies and still print them. Paper wallets can be
        created for the main cryptocurrencies, as long as they use Blockchain technology or similar. Paper wallets are
        also called cold wallets, as they are not connected to the internet. They are suitable for storing large amounts
        of money that will not be moved constantly, since whenever the wallet is connected to the internet, it becomes
        more vulnerable and the user must create a new wallet.
        <br />
        This alternative is considered the safest because the user connects to the internet only when he wants to access
        crypto assets. As hacker attacks mainly occur on the internet, the wallet that remains offline is safe from this
        type of attack.
        <br />
        <br />
        A paper wallet works through a program, which must be run on the computer. As digital currencies have the option
        of sending and receiving, they also have individual user addresses and passwords. These addresses are actually
        already created and are totally different. Therefore, the user just chooses one and uses it, which prevents the
        creation of identical addresses.
        <br />
        In other words, the addresses already exist in the software and when the user generates a random address, it is
        actually already on the Blockchain ready to be used, even if it was created offline.
        <br />
        After creating the paper wallet, the user just needs to transfer the coins to the address created offline, where
        it is only necessary to connect the wallet to the internet when removing the coins. But for that, the wallet
        must accept the import and the procedure requires entering the private password.
        <br />
        However, by doing this, the wallet will no longer be as secure as it has had contact with the internet. We can
        say that your paper wallet has been “wet” by the internet, so it is no longer as efficient.
        <br />
        Therefore, to store cryptocurrencies again as securely as before, it would be necessary to create a new paper
        wallet.`,

    // --------------------------------------------------

    'aboutUs.title': 'About Us',
    'aboutUs.navTitle': 'About Us',

    'aboutUs.meta.title': 'About Us',
    'aboutUs.meta.description': `
        Create Paper Wallet is a decentralized system, governed by the DeFiable Project community.`,

    'aboutUs.description': `
        Your cryptocurrency is not here? Want a system update?
        <br />
        <br />
        <0>Create Paper Wallet</0> is a decentralized system, governed by the <1>DeFiable Project</1> community. You
        must become an investor of the <2>DeFiable Project</2> to open a requirement of a system update.
        <br />
        <br />
        For general questions or if you want to discuss the system, feel free to leave a comment at our GitHub page.`,

    // --------------------------------------------------

    'github.navTitle': 'Github Repository',

    // --------------------------------------------------

    'errors.generic.title': 'Error!',
} as const;
