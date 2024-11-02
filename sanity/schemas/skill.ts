import { type } from "os";
import { title } from "process";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    name: 'skill',
    title: 'Skill',
    type: 'document',
fields: [
    {
        name:"title",
        title:"Title",
        description:"Name of the skill",
        type:"string",
        },
        {
            name:"progress",
            title:"Progress",
            type:"number",
            description:"Progress of the skill",
            validation: {Rule} => Rule.min(0).max(100),
            },
            {
                name:"profilePic",
                title:"ProfilePic",
                type:"image",
                options:{
                  hotspot:true,
              }
            }  
]

}

