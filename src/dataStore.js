export const categoriesList = [
    {
        id: "c1",
        name: "virtual runs",
        events: [
            {
                id: "e1",
                org_id: 'o1', 
                name: "collaborate",
                date: "29 May 2020",
                price: "100"
            },
            {
                id: "e2",
                org_id: 'o1',
                name: "kids races",
                date: "30 May 2020",
                price: "100"
            },
            {
                id: "e3",
                org_id: 'o2',
                name: "mymarathon",
                date: "31 May 2020",
                price: "100"
            },
            {
                id: "e4",
                org_id: 'o3',
                name: "cycle",
                date: "31 May 2020",
                price: "100"
            }
        ]
    },
    {
        id: "c2",
        name: "10k runs",
        events: [
            {
                id: "e1",
                org_id: 'o2',
                name: "bluebell challenge",
                date: "29 May 2020",
                price: "100"
            },
            {
                id: "e2",
                org_id: 'o3',
                name: "steady",
                date: "30 May 2020",
                price: "100"
            },
            {
                id: "e3",
                org_id: 'o4',
                name: "summer series",
                date: "31 May 2020",
                price: "100"
            },
            {
                id: "e4",
                org_id: 'o5',
                name: "half marathon",
                date: "31 May 2020",
                price: "100"
            }
        ]      
    }
];

export const eventsdetail=[
    {
        
    }
]

export const addEvent = (event)=>
{
    let id = "e";
    let index = categoriesList.findIndex(category=>category.id == event.catid);
    let events_size = categoriesList[index].events.length +1;
    id += events_size;
    categoriesList[index].events.push({
        id: id,
        org_id: event.org_id,
        name: event.ename,
        date: event.edate,
        price: event.eprice
    });
}