import homepage from '../webpages/homepage';

export default function* saga() {
    try {
        yield [
            homepage.saga(),
        ];
    } catch (error) {
        return;
    }
}