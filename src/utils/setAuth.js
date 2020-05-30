import MD5 from 'crypto-js/md5';

const setAuthParam = () => {
    const key = process.env.REACT_APP_MARVEL_API_KEY;
    const secret = process.env.REACT_APP_MARVEL_API_SECRET;
    const ts = Date.now();
    const hash = MD5(ts + secret + key).toString();
    return `ts=${ts}&apikey=${key}&hash=${hash}`;
};

export default setAuthParam;
