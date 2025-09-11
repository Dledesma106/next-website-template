import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token: Scalars["String"];
  user: User;
};

export type Blog = {
  __typename?: "Blog";
  author: User;
  authorId: Scalars["String"];
  content: Scalars["String"];
  createdAt: Scalars["DateTime"];
  excerpt: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  published: Scalars["Boolean"];
  publishedAt: Maybe<Scalars["DateTime"]>;
  slug: Scalars["String"];
  tags: Array<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type BlogCrudRef = {
  __typename?: "BlogCrudRef";
  blog: Maybe<Blog>;
  message: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
};

export type City = {
  __typename?: "City";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type CityCrudRef = {
  __typename?: "CityCrudRef";
  city: Maybe<City>;
  message: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
};

export type CityInput = {
  name: Scalars["String"];
  provinceId: Scalars["String"];
};

export type CreateBlogInput = {
  authorId: Scalars["String"];
  content: Scalars["String"];
  excerpt: InputMaybe<Scalars["String"]>;
  published: InputMaybe<Scalars["Boolean"]>;
  tags: InputMaybe<Array<Scalars["String"]>>;
  title: Scalars["String"];
};

export type CreateUserInput = {
  email: Scalars["String"];
  name: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  role: InputMaybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createBlog: BlogCrudRef;
  createCity: CityCrudRef;
  createUser: UserCrudRef;
  deleteBlog: BlogCrudRef;
  deleteCity: CityCrudRef;
  deleteUser: UserCrudRef;
  login: AuthPayload;
  publishBlog: BlogCrudRef;
  unpublishBlog: BlogCrudRef;
  updateBlog: BlogCrudRef;
  updateCity: CityCrudRef;
  updateUser: UserCrudRef;
};

export type MutationCreateBlogArgs = {
  input: CreateBlogInput;
};

export type MutationCreateCityArgs = {
  input: CityInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteBlogArgs = {
  id: Scalars["String"];
};

export type MutationDeleteCityArgs = {
  id: Scalars["String"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"];
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationPublishBlogArgs = {
  id: Scalars["String"];
};

export type MutationUnpublishBlogArgs = {
  id: Scalars["String"];
};

export type MutationUpdateBlogArgs = {
  id: Scalars["String"];
  input: UpdateBlogInput;
};

export type MutationUpdateCityArgs = {
  id: Scalars["String"];
  input: CityInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars["String"];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: "Query";
  blog: Blog;
  blogBySlug: Blog;
  blogs: Array<Blog>;
  cities: Array<City>;
  citiesCount: Scalars["Int"];
  city: City;
  publishedBlogs: Array<Blog>;
  user: User;
  userByEmail: User;
  users: Array<User>;
};

export type QueryBlogArgs = {
  id: Scalars["String"];
};

export type QueryBlogBySlugArgs = {
  slug: Scalars["String"];
};

export type QueryBlogsArgs = {
  published: InputMaybe<Scalars["Boolean"]>;
  search: InputMaybe<Scalars["String"]>;
  skip: InputMaybe<Scalars["Int"]>;
  take: InputMaybe<Scalars["Int"]>;
};

export type QueryCitiesArgs = {
  provinceId: InputMaybe<Scalars["String"]>;
  search: InputMaybe<Scalars["String"]>;
  skip: InputMaybe<Scalars["Int"]>;
  take: InputMaybe<Scalars["Int"]>;
};

export type QueryCitiesCountArgs = {
  search: InputMaybe<Scalars["String"]>;
};

export type QueryCityArgs = {
  id: Scalars["String"];
};

export type QueryPublishedBlogsArgs = {
  search: InputMaybe<Scalars["String"]>;
  skip: InputMaybe<Scalars["Int"]>;
  take: InputMaybe<Scalars["Int"]>;
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type QueryUserByEmailArgs = {
  email: Scalars["String"];
};

export type QueryUsersArgs = {
  search: InputMaybe<Scalars["String"]>;
  skip: InputMaybe<Scalars["Int"]>;
  take: InputMaybe<Scalars["Int"]>;
};

export type UpdateBlogInput = {
  content: InputMaybe<Scalars["String"]>;
  excerpt: InputMaybe<Scalars["String"]>;
  published: InputMaybe<Scalars["Boolean"]>;
  tags: InputMaybe<Array<Scalars["String"]>>;
  title: InputMaybe<Scalars["String"]>;
};

export type UpdateUserInput = {
  email: InputMaybe<Scalars["String"]>;
  name: InputMaybe<Scalars["String"]>;
  password: InputMaybe<Scalars["String"]>;
  role: InputMaybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  name: Maybe<Scalars["String"]>;
  posts: Array<Blog>;
  role: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type UserCrudRef = {
  __typename?: "UserCrudRef";
  message: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
  user: Maybe<User>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "AuthPayload";
    token: string;
    user: {
      __typename?: "User";
      id: string;
      email: string;
      name: string | null;
      role: string;
      createdAt: any;
      updatedAt: any;
    };
  };
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: {
    __typename?: "UserCrudRef";
    success: boolean;
    message: string | null;
    user: {
      __typename?: "User";
      id: string;
      email: string;
      name: string | null;
      role: string;
      createdAt: any;
      updatedAt: any;
    } | null;
  };
};

export type UpdateUserMutationVariables = Exact<{
  id: Scalars["String"];
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: {
    __typename?: "UserCrudRef";
    success: boolean;
    message: string | null;
    user: {
      __typename?: "User";
      id: string;
      email: string;
      name: string | null;
      role: string;
      createdAt: any;
      updatedAt: any;
    } | null;
  };
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteUserMutation = {
  __typename?: "Mutation";
  deleteUser: {
    __typename?: "UserCrudRef";
    success: boolean;
    message: string | null;
    user: {
      __typename?: "User";
      id: string;
      email: string;
      name: string | null;
      role: string;
    } | null;
  };
};

export type CreateBlogMutationVariables = Exact<{
  input: CreateBlogInput;
}>;

export type CreateBlogMutation = {
  __typename?: "Mutation";
  createBlog: {
    __typename?: "BlogCrudRef";
    success: boolean;
    message: string | null;
    blog: {
      __typename?: "Blog";
      id: string;
      title: string;
      slug: string;
      content: string;
      excerpt: string | null;
      published: boolean;
      publishedAt: any | null;
      tags: Array<string>;
      createdAt: any;
      author: {
        __typename?: "User";
        id: string;
        email: string;
        name: string | null;
      };
    } | null;
  };
};

export type UpdateBlogMutationVariables = Exact<{
  id: Scalars["String"];
  input: UpdateBlogInput;
}>;

export type UpdateBlogMutation = {
  __typename?: "Mutation";
  updateBlog: {
    __typename?: "BlogCrudRef";
    success: boolean;
    message: string | null;
    blog: {
      __typename?: "Blog";
      id: string;
      title: string;
      slug: string;
      content: string;
      excerpt: string | null;
      published: boolean;
      publishedAt: any | null;
      tags: Array<string>;
      updatedAt: any;
      author: {
        __typename?: "User";
        id: string;
        email: string;
        name: string | null;
      };
    } | null;
  };
};

export type PublishBlogMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type PublishBlogMutation = {
  __typename?: "Mutation";
  publishBlog: {
    __typename?: "BlogCrudRef";
    success: boolean;
    message: string | null;
    blog: {
      __typename?: "Blog";
      id: string;
      title: string;
      published: boolean;
      publishedAt: any | null;
    } | null;
  };
};

export type UnpublishBlogMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type UnpublishBlogMutation = {
  __typename?: "Mutation";
  unpublishBlog: {
    __typename?: "BlogCrudRef";
    success: boolean;
    message: string | null;
    blog: {
      __typename?: "Blog";
      id: string;
      title: string;
      published: boolean;
      publishedAt: any | null;
    } | null;
  };
};

export type GetPublishedBlogsQueryVariables = Exact<{
  skip: InputMaybe<Scalars["Int"]>;
  take: InputMaybe<Scalars["Int"]>;
  search: InputMaybe<Scalars["String"]>;
}>;

export type GetPublishedBlogsQuery = {
  __typename?: "Query";
  publishedBlogs: Array<{
    __typename?: "Blog";
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    published: boolean;
    publishedAt: any | null;
    tags: Array<string>;
    createdAt: any;
    author: {
      __typename?: "User";
      id: string;
      email: string;
      name: string | null;
    };
  }>;
};

export type GetBlogBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type GetBlogBySlugQuery = {
  __typename?: "Query";
  blogBySlug: {
    __typename?: "Blog";
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string | null;
    published: boolean;
    publishedAt: any | null;
    tags: Array<string>;
    createdAt: any;
    updatedAt: any;
    author: {
      __typename?: "User";
      id: string;
      email: string;
      name: string | null;
    };
  };
};

export type GetUsersQueryVariables = Exact<{
  skip: InputMaybe<Scalars["Int"]>;
  take: InputMaybe<Scalars["Int"]>;
}>;

export type GetUsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "User";
    id: string;
    email: string;
    name: string | null;
    role: string;
    createdAt: any;
  }>;
};

export type GetUserQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUserQuery = {
  __typename?: "Query";
  user: {
    __typename?: "User";
    id: string;
    email: string;
    name: string | null;
    role: string;
    createdAt: any;
  };
};

export const LoginDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Login" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "login" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CreateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "role" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const CreateBlogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateBlog" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateBlogInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createBlog" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blog" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "excerpt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "published" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "publishedAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "tags" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "author" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateBlogMutation, CreateBlogMutationVariables>;
export const UpdateBlogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateBlog" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateBlogInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateBlog" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blog" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "excerpt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "published" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "publishedAt" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "tags" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "author" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const PublishBlogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "PublishBlog" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "publishBlog" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blog" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "published" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "publishedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PublishBlogMutation, PublishBlogMutationVariables>;
export const UnpublishBlogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UnpublishBlog" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "unpublishBlog" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blog" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "published" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "publishedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UnpublishBlogMutation,
  UnpublishBlogMutationVariables
>;
export const GetPublishedBlogsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPublishedBlogs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "take" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "search" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "publishedBlogs" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "take" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "search" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "search" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "excerpt" } },
                { kind: "Field", name: { kind: "Name", value: "published" } },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPublishedBlogsQuery,
  GetPublishedBlogsQueryVariables
>;
export const GetBlogBySlugDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBlogBySlug" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "blogBySlug" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "slug" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "excerpt" } },
                { kind: "Field", name: { kind: "Name", value: "published" } },
                { kind: "Field", name: { kind: "Name", value: "publishedAt" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>;
export const GetUsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUsers" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "take" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "take" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "take" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
