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
			editContact: async (contact) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/Alexis-y-Fido/contacts/'+ contact.id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',  // Indicamos que enviamos JSON
						},
						body: JSON.stringify(contact),
					});
					if (!resp.ok) {
						throw new Error('error creando agenda')
					}
				} catch (error) {
					console.error(error);
				}
			},


			selectToEdit: (contact) => {
				setStore({selected: contact})
			},

			createAgenda: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/Alexis-y-Fido', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',  // Indicamos que enviamos JSON
						}
					});
					if (!resp.ok) {
						throw new Error('error creando agenda')
					}
					const data = await resp.json();
					console.log(data)
				} catch (error) {
					console.error(error);
				}
			},

			deleteContact: async (id) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/Alexis-y-Fido/contacts/' + id, {
						method: 'DELETE',
					})
					if (!resp.ok) throw new Error ('algo ha fallado eliminando usuario')
					getActions().getContacts()
				}
				 catch (error) {
					console.log(error)
				}
			},
			getContacts: async () => {
				try {const resp = await fetch('https://playground.4geeks.com/contact/agendas/Alexis-y-Fido/contacts');
					if (resp.status === 404) return getActions().createAgenda();
					if (!resp.ok) {
						throw new Error('error obteniendo contacts')
					};
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
		}
	};
};

export default getState;
