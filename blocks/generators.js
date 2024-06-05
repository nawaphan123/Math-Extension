Blockly.Python['calculate'] = function(block) {
  var problem = Blockly.Python.valueToCode(block, 'problem', Blockly.Python.ORDER_ATOMIC);
  var code = `eval(${problem})`;
  return [code, Blockly.Python.ORDER_NONE];
};



