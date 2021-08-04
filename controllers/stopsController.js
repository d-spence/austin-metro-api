
// @desc  Get all stops
// @route GET /api/v1/stops
// @access Public
const getAllStops = async (req, res, next) => {
  try {
    const stops = null; // TODO: Query the database to get all stops

    return res.status(200).json({
      success: true,
      count: stops.length,
      data: stops
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error: Could not load stops'
    });
  }
}

// @desc  Get a stop based on provided id
// @route GET /api/v1/stops/:id
// @access Public
const getStop = async (req, res, next) => {
  try {
    const stop = null; // TODO: Query the database to get stop with matching id

    return res.status(200).json({
      success: true,
      count: stop.length,
      data: stop
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: `Server Error: Could not load stop with id ${req.params.id}`
    });
  }
}

module.exports = {
  getAllStops,
  getStop,
}