const FilterGroup = () => {
    return ( 
        <>
            <div className="w-[308px] h-[720px] bg-white absolute top-[150px] left-[100px]">
            <form>
                <h2 className="text-dark-gray2 font-bold p-5">Filtrar por</h2>
                <div class="flex-grow border-t bg-dark-gray3 w-[90%] mx-auto"></div>
                <fieldset className="p-5 mt-5">
                    <legend className="font-semibold text-dark-gray2">Marka</legend>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Adidas
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Callenciaga
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        K-Swiss
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Nike
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Puma
                    </label>
                </fieldset>
                <fieldset className="p-5">
                    <legend>Categoria</legend>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Adidas
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Esporte e lazer
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Casual
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Ultilitario
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Corrida
                    </label>
                </fieldset>
                <fieldset className="p-5">
                    <legend>Genero</legend>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Masculino
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Feminino
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="checkbox" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Unisex
                    </label>
                </fieldset>
            </form>
            <fieldset className="p-5">
                    <legend>Categoria</legend>
                    <label className="flex items-center gap-2">
                    <input type="radio" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Novo
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="radio" name="promocao" 
                        className="accent-pink-500 w-4 h-4"
                        />
                        Usado
                    </label>
                </fieldset>

            </div>
        </>
     );
}
 
export default FilterGroup;