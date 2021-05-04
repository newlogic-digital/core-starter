import {Core} from  "@newlogic-digital/core";

export default new Core().init({
    styles: {
        purge: {
            content: ['src/scripts/**/*.js', 'src/templates/**/*.twig', 'app/Presenters/templates/**/*.latte', 'temp/cdn/*.js']
        },
        ratio: {
            content: ['src/templates/**/*.twig', 'app/Presenters/templates/**/*.latte']
        },
    },
    templates: {
        layout: "layout/main.twig"
    }
})