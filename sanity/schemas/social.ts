// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'social',
    title: 'Social',
    type: 'document',
fields: [
    {
        name:'title',
        title:'Title',
        description:"The title of the social media link",
        type: 'string'
    },
    {
        name: "url",
        title: "URL",
        description: "The URL for this social media link",
        type: "url",
    },
]
}