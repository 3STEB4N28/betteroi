module.exports = async (d) => {
    return {
      code: d.command.code.replaceLast(
        `$nodeVersion`,
        process.version
      ),
    };
  };