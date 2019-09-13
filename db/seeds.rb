# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Log.delete_all

teacher_list = [
  ["sara",
  "sarasara",
  "sara@sara.com",
  "teacher"
  ],
  ["tibby",
  "tibbytibby",
  "tibby@tibby.com",
  "teacher"
  ],
  ["bryce",
  "brycebryce",
  "bryce@bryce.com",
  "teacher"
  ],
  ["amy",
  "amyamy",
  "amy@amy.com",
  "teacher"
  ]
]

teacher_list.each do |username, password, email, account_type|
  User.create(username: username, password: password, email: email, account_type: account_type)
end

student_list = [
  ["luis",
  "luisluis",
  "luis@luis.com",
  "student"
  ],
  ["john",
  "johnjohn",
  "john@sjohn.com",
  "student"
  ],
  ["alex",
  "alexalex",
  "alex@alex.com",
  "student"
  ],
  ["emily",
  "emilyemily",
  "emily@emily.com",
  "student"
  ]
]

student_list.each do |username, password, email, account_type|
  User.create(username: username, password: password, email: email, account_type: account_type)
end