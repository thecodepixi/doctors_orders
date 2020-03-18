## Doctor's Orders

- an app for tracking doctor visits and/or medical treatment, test results, symptoms, and treatment info

**User Stories:** 

- on main page/index route I can see cards displaying brief info/a preview of all previous "orders"
- There is a nav bar with links for the homepage and a button to add a new "order" (might not need this?)
- There is an alert modal that will appear if I have any appointments that require a follow up
    - The modal will have a check button next to each follow up. When clicked, the appointment will be marked as not needing a follow up and be updated. (This will send a POST request to the API to update that appointment info AND will update the appointment in state)
- When I click the 'new' button, I am taken to the "/new" route, and see a form for entering new appointment info
    - the form asks for the appointment date, doctor name and specialty, the reason for my visit as a radio button (checkup, treatment, sick visit), any test results received, any new treatment info, and a check box for whether I need to follow up with the doctor.
- When I click submit, I am taken to an '/:id' route, and see all of the new appointment info I just entered.
- From the homepage, if I click on the card with the appointment preview, I am taken to the page for that individual appointment, and can see all of the info from that previous appointment.
    - If the appointment requires a follow up, there will be a header asking if I have followed up on the appointment yet, and a button to click if I have. (reuse follow-up alert modal?)
- **Nice to Have**: a way to sort by appointment type (checkup, sick, treatment). Would this just be a drop down sorting feature on the main index page? Would this hit specific API routes for each appointment type, or sort the data in place?

**MUST HAVE:** 

- 3 Routes (using React Router)
    - Index (all history)
    - /:id (view a single order)
    - /new (form for submitting a new appointment)
- 2 Container Components
    - Orders container (holds the order previews component, single order component, and the follow-up modal)
    - New Order container (for new order form)
- 5 Stateless Components
    - all orders (holds all of the order preview components)
    - order preview (preview of single previous)
    - single order (for the /:id route)
    - new order form
    - Follow-Up alert
    - nav bar??
- Use Redux to manage state (w/ thunk for async)

