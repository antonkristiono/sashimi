export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'eventName',
      title: 'Nama Event',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'startDateEvent',
      title: 'Mulai Event',
      type: 'datetime',
      options: {
        dateFormat: "DD-MM-YYYY",
        timeFormat: "HH:mm",
      }
    },
    {
      name: 'endDateEvent',
      title: 'Selesai Event',
      type: 'datetime',
      options: {
        dateFormat: "DD-MM-YYYY",
        timeFormat: "HH:mm",
      }
    },
    {
      name: 'sponsor',
      title: 'Sponsor',
      type: 'array',
      of: [{type: 'sponsor'}],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      sponsor: 'sponsor.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {sponsor} = selection
      return Object.assign({}, selection, {
        subtitle: sponsor && `by ${sponsor}`,
      })
    },
  },
}
