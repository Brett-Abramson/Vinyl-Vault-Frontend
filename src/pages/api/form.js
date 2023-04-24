const handler = (req,res) => {
    const body = req.body

    console.log(`body: `, body)

    res.status(200).json({data: `${body.artist} ${body.title} ${body.year_released}`})
}

export default handler