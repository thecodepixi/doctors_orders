
# until Doctor.all.count === 10 
#   Doctor.create(name: Faker::Name.name, specialty: Faker::Company.profession)
# end 

until Order.all.count === 20 
  appointment_types = ["sick visit", "checkup", "treatment"]
  order = Order.new(appointment_date: Faker::Date.in_date_period(year: 2019), appointment_type: appointment_types.sample)
  order.doctor = Doctor.all.sample 
  order.save 
end 