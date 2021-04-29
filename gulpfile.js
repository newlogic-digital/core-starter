import {Core} from  "@newlogic-digital/core";

export default new Core().init({
    styles: {
        revision: false,
        purge: {
            content: ['src/scripts/**/*.js', 'public/*.html', 'app/Presenters/templates/**/*.latte', 'temp/cdn/*.js']
        }
    }
})