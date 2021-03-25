const { example, object, number, array } = require("joi");

const swaggerDefs = {
  User:{
    properties:{
      name:{
        type:"string"
      },
      email:{
        type:"string"
      },
      password:{
        type:"string"
      },
      phone:{
        type:"string"
      },
      dateOfBirth:{
        type:"date"
      },
      roles:{
        type:"array",
        items:{
          type:"string"
        }
      },
      isActive:{
        type: "Boolean"
      }
    }
  },
  "Camping Site":{
    properties:{
      name:{
        type:"string"
      },
      email:{
        type:"string"
      }, 
      description:{
        type:"string"
      },
      location:{
        type:"[number,number]"
      },
      phone: {
        type:"string",
      },
      owner: {
        type: "object",
        properties:{
          name:{
            type:"string"
          },
          email:{
            type:"string"
          }
        }
      },
      unitPrice:{
        type:"number",
        required:true
      },
      placesAvailable:{
        type:"number",
        required:true
      }
    }
  },
  Reservation:{
    properties:{
      user:{
        type:"object"
      },
      campingSite:{
        type:"object"
      },
      startDate:{
        type:"date"
      },
      endDate:{
        type:'date'
      },
      total:{
        type:"Number"
      }
    }
  }
}

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Campit API',
      description: 'Campit Project API Information',
      servers: [
        'https://localhost:3000'
      ],
    },
    paths:{
      "/api/users":{
        post:{
          summary:"Rgister new User",
          tags:["users"],
          parameters:[{
            in:"body",
            name:"user",
            description:"The user to create",
            schema:{
              type:"object",
              properties: swaggerDefs.User.properties
            }
          }],
          responses:[{
            200:{
              description:"User registered"
            }
          }]
        },
      },
      "/api/users/verify/{id}":{
        post:{
          summary:"Verify newly registered user",
          tags:["users"],
          parameters:[{
            in:"path",
            name:"id",
            description:"The user ID",
            "schema":{
              type:"string",
              required:true
            }
          }],
          responses:[{
            200:{
              description:"User Verified"
            }
          }]
        }
      },
      "/api/users/me":{
        get:{
          summary:"Get user Profile data",
          tags:["users"],
          parameters:[{
            in:"header",
            name:"x-access-token",
            schema:{
              type:"string",
              required:true
            }
          }],
          responses:[{
            200:{
              description:"User Profile"
            }
          }]
        }
      },
      "/api/auth":{
        post:{
          summary:"authenticate user",
          tags:["auth"],
          parameters:[{
            in:"body",
            name:"user credentials",
            schema:{
              type:"object",
              properties:{
                email:{
                  type:"string",
                  example:"vv@lol.com"
                },
                password:{
                  type:"string",
                  example:"12123123"
                }
              }
            }
          }],
          responses:[{
            200:{
              description:"Logged"
            }
          }]
        }
      },
      "/api/sites":{
        post:{
          summary:"add Camping site",
          tags:["Camping sites"],
          parameters:[{
            in: "body",
            schema:{
              type:"object",
              name:"The camping site to add",
              properties:{
                name:{
                  type:"string",
                  example:"A very Awesome camping place yo"
                },
                email:{
                  type:"string",
                  example:"campingSite@email.lol"
                },
                phone:{
                  type:"string",
                  example:"21212121"
                },
                description:{
                  type:"string",
                  example:"Some description for this awesomest camping site"
                },
                location:{
                  type:[],
                  items:{
                    type: "number"
                  },
                  example:[25.33,25.44]
                },
                unitPrice:{
                  type:"number",
                  required:"true"
                },
                placesAvailable:{
                  type:"number",
                  required:true
                }
              }
            }
          },{
            in:"header",
            name:"x-access-token",
            schema:{
              type:"string",
              required:true
            }
          }],
          responses:[{
            200:{
              description:"success"
            }
          }]
        },
        get:{
          summary:"get Camping site",
          tags:["Camping sites"],
          parameters:[{
            in:"header",
            name:"x-access-token",
            schema:{
              type:"string",
              required:true
            }
          }],
          responses:[{
            200:{
              description:"success"
            }
          }]
        }
      },
      "/api/reservations":{
        post:{
          summary:"Add a reservation",
          tags:["Reservations"],
          parameters:[{
            in: "body",
            schema:{
              type:"object",
              name:"The reservation site to add",
              properties:{
                campingSite:{
                  type:"ObjectId",
                  example:"5effc7da485ee92f5869dedd"
                },
                startDate:{
                  type:"date",
                  example:"2005-03-03"
                },
                endDate:{
                  type:"date",
                  example:"2005-03-04"
                },
              }
            }
          },{
            in:"header",
            name:"x-access-token",
            schema:{
              type:"string",
              required:true
            }
          }],
          responses:[{
            200:{
              description:"success"
            }
          }]
        }
      }
    },
    definitions: swaggerDefs
  },
  apis: [
    'routes/*.js'
  ],

}


module.exports = swaggerOptions;