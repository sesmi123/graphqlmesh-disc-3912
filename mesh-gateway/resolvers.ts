import { Resolvers } from './.mesh'

const resolvers: Resolvers = {
  Company: {
    reportEmail: {
      selectionSet: `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Loki.Query.companySettingsReportEmail({
          root,
          args: {
            companyId: root.id
          },
          context,
          info
        })
      }
    }
  },
}

export default resolvers