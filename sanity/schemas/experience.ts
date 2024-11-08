// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name:"experience",
    title:"Experience",
    type:"document",
    fields: [
        {
            name:"jobTitle",
            title:"JobTitle",
            type:"string",
        },
            {
                name:"jobTitle",
                title:"JobTitle",
                type:"string",
            },
                {
                    name:"company",
                    title:"Company",
                    type:"text",
                },
              
                    {
                        name:"dateStarted",
                        title:"DateStarted",
                        type:"date",
                    },
                    {
                        name:"dateEnded",
                        title:"DateEnded",
                        type:"date",
                    },
                    {
                        name:"isCurrentlyWorkingHere",
                        title:"IsCurrentlyWorkingHere",
                        type:"boolean",
                    },
                    {
                        name:"technologies",
                        title:"Technologies",
                        type:"array",
                        of:[{type:'reference',to:{type:'skill'}}],
                    },
                    {
                        name:"points",
                        title:"Points",
                        type:"array",
                        of:[{type:"string"}],
                    },
                    
    ]

}