const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: null,
		},
		actions: {
			deleteContact: async (id) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/Alexis-y-Fido/contacts/' + id, {
						method: 'DELETE',
					})
					if (!resp.ok) throw new Error ('algo ha fallado eliminando usuario')
				}
				 catch (error) {
					console.log(error)
				}
			},
			getContacts: async () => {
				try {const resp = await fetch('https://playground.4geeks.com/contact/agendas/Alexis-y-Fido/contacts');
					if (!resp.ok) {
						throw new Error('error obteniendo contacts')
					}
					const data = await resp.json();
					setStore({contacts: data.contacts});

				} catch (error) {
					console.error(error)
				}
			},
			createContact: async (contact) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/Alexis-y-Fido/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',  // Indicamos que enviamos JSON
						},
						body: JSON.stringify(contact),
					});
					if (!resp.ok) {
						throw new Error('error creando contacts')
					}
					const data = await resp.json();
					console.log(data)
				} catch (error) {
					console.error(error);
				}
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
