// IMPORTANTE: Obtener un pokémon por el id
export const obtenerPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemon = await Pokemon.findById(id);
        
        if (!pokemon) {
            return res.status(404).json({
                message: "Pokémon no encontrado",
                data: null
            });
        }

        if (pokemon.deleted) {
            return res.status(404).json({
                message: "Pokémon eliminado",
                data: null
            });
        }

        res.status(200).json({
            message: "Pokémon encontrado!",
            data: pokemon
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
