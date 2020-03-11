# README
## Doctor's Orders API 

**Models:** 

- `Order`
    - `belongs_to :doctor`
    - has an 'appointment_date' date
    - has an 'appointment_type' string
    - has 'test_results' string
    - has 'treatment_info' string
    - has 'follow_up' boolean
    - has a 'doctor_id' foreign key
    - only required info are appointment date, doctor info, and appointment type.
    - if treatment_info or test_results are left blank they default to the string 'None Provided'
- `Doctor`
    - `has_many :orders`
    - has a 'name' string
    - has a 'specialty' string
    - requires both name and specialty

**Controllers:** 

- `OrdersController`
    - `index` route, returns all orders
    - `show`, returns a single order based on its id
    - `create`, adds a new order to the DB
        - `create` will `find_or_create_by` for doctor info
    - `destroy`?

**Serializer** 

- `OrdersSerializer`
    - include all order info except created_at and updated_at
    - include ONLY name and specialty for doctor info