// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name:"project",
    title:"Project",
    type:"document",
    fields: [
        {
            name:"title",
            title:"Title",
            description:"The main heading of the project.",
            type:"string",
        },
        {
            name:"image",
            title:"Image",
            type:"image",
            Options: {
                hotspot: true,
            }
        },
        {
            name:"summary",
            title:"Summary",
            type:"text",
        },
        

    ]
}