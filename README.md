Para executar o código é necessário executar os seguintes comandos:

npm install

npm run dev


O  servidor da aplicação irá rodar na porta 3000


Para uso da aplicação utilizar os seguintes endereços:

- Automovel
	- Cadastrar um novo automóvel (POST)
		
		localhost:3000/automovel
		
	- Recuperar um automóvel cadastrado pelo seu identificador único (GET)
		
		localhost:3000/automovel/*PLACA*
		
		Observação: alterar a palavra "*PLACA*" pela placa do carro a ser recuperado.
		
	- Listar os automóveis cadastrados. Deve ser possível filtrar a listagem dos automóveis por cor e marca. (GET)
		
		localhost:3000/automovel/?marca=*MARCA*
		
		localhost:3000/automovel/?cor=*COR*
		
		localhost:3000/automovel/?marca=*MARCA*&cor=*COR*
		
		Observações: alterar a palavra "*MARCA*" e "*COR*" pela marca e cor dos carros a serem listados.
	
	- Atualizar um automóvel cadastrado (PUT)
		
		localhost:3000/automovel/*PLACA*
		
		Observação: alterar a palavra "*PLACA*" pela placa do carro que será atualizado.
	
	- Excluir um automóvel cadastrado (DELETE)
		
		localhost:3000/automovel/*PLACA*
		
		Observação: alterar a palavra "*PLACA*" pela placa do carro que será excluído.

- Motoristas
	- Cadastrar um novo morotista (POST)
		
		localhost:3000/motoristas
		
		
- Para cadastramento de veículos deve ser utilizado o seguinte padrão:

- Body:
	raw

	JSON

- Corpo do body:

	{
	
		"placa":"*PLACA*",
		
		"marca":"*MARCA*",
		
		"cor":"*COR*"
		
	}


	Observações: alterar a palavra "*PLACA*", "*MARCA*" e "*COR*" pela placa, marca e cor dos carros a serem cadastrados.