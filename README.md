Para executar o c�digo � necess�rio executar os seguintes comandos:

npm install

npm run dev


O  servidor da aplica��o ir� rodar na porta 3000


Para uso da aplica��o utilizar os seguintes endere�os:

- Automovel
	- Cadastrar um novo autom�vel (POST)
		
		localhost:3000/automovel
		
	- Recuperar um autom�vel cadastrado pelo seu identificador �nico (GET)
		
		localhost:3000/automovel/*PLACA*
		
		Observa��o: alterar a palavra "*PLACA*" pela placa do carro a ser recuperado.
		
	- Listar os autom�veis cadastrados. Deve ser poss�vel filtrar a listagem dos autom�veis por cor e marca. (GET)
		
		localhost:3000/automovel/?marca=*MARCA*
		
		localhost:3000/automovel/?cor=*COR*
		
		localhost:3000/automovel/?marca=*MARCA*&cor=*COR*
		
		Observa��es: alterar a palavra "*MARCA*" e "*COR*" pela marca e cor dos carros a serem listados.
	
	- Atualizar um autom�vel cadastrado (PUT)
		
		localhost:3000/automovel/*PLACA*
		
		Observa��o: alterar a palavra "*PLACA*" pela placa do carro que ser� atualizado.
	
	- Excluir um autom�vel cadastrado (DELETE)
		
		localhost:3000/automovel/*PLACA*
		
		Observa��o: alterar a palavra "*PLACA*" pela placa do carro que ser� exclu�do.

- Motoristas
	- Cadastrar um novo morotista (POST)
		
		localhost:3000/motoristas
		
		
- Para cadastramento de ve�culos deve ser utilizado o seguinte padr�o:

- Body:
	raw

	JSON

- Corpo do body:

	{
	
		"placa":"*PLACA*",
		
		"marca":"*MARCA*",
		
		"cor":"*COR*"
		
	}


	Observa��es: alterar a palavra "*PLACA*", "*MARCA*" e "*COR*" pela placa, marca e cor dos carros a serem cadastrados.