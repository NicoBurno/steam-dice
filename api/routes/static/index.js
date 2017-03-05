import path from 'path';

export default (req, res) => {
    res.render(path.join(__dirname, '../../../front/static/build/index.html'));
};
