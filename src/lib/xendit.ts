import {Xendit} from 'xendit-node'

const xenditClient = new Xendit({
    secretKey: process.env.XENDIT_SECRET_KEYS ?? 'xnd_development_zoTggKTkoGPQ0dPsXkNP4m8YTziNVlyOCAXnlxFemBaoobrFD4xZjt6HwrS3rW84'
})

export default xenditClient