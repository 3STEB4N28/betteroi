module.exports = async d => {
 const code = d.command.code 
 
 const inside = d.unpack()
	const err = d.inside(inside)

	if (err) return d.error(err)
 
 return {
 code: code.replaceLast(`$textTrim${inside}`, inside.addBrackets().trim().deleteBrackets())
 }
}