import pet from "./pet";

export default {
    name: 'owner',
    type: 'document',
      title: 'Owner',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Owner Name'
      },
      {
        name: 'last_name',
        type: 'string',
        title: 'Owner Last Name'
      },
      {
        name: 'address',
        type: 'string',
        title: 'address'
      },
      {
        name: "pets",
        type: "array",
        title: "pets",
        of: [{type: "reference", to: pet}]
      }
    ]
  }