import * as Blockly from "blockly";
import { javascriptGenerator } from "blockly/javascript";
import { registerFieldColour, FieldColour } from "@blockly/field-colour"; registerFieldColour();
// print
{
  const Print = {
    init: function() {
      this.appendValueInput('TEXT')
        .appendField('Print');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
      this.setHelpUrl('');
      this.setColour(225);
    }
  };
  Blockly.common.defineBlocks({Print: Print});
                      
  // Generator cho block
  javascriptGenerator.forBlock["Print"] = function (block, generator) {
    const msg = generator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || "''";
    const code = `console.log(${msg})\n`;
    return code;
  };
}

// println
{
  const Println = {
    init: function() {
      this.appendValueInput('TEXT')
        .appendField('Println');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('');
      this.setHelpUrl('');
      this.setColour(225);
    }
  };
  Blockly.common.defineBlocks({Println: Println});
                      
  // Generator cho block
  javascriptGenerator.forBlock["Println"] = function (block, generator) {
    const msg = generator.valueToCode(block, "TEXT", javascriptGenerator.ORDER_NONE) || "''";
    const code = `console.log(${msg})\n`;
    return code;
  };
}

//list add
{
 const list_add = {
  init: function() {
    this.appendValueInput('item')
      .appendField('add');
    this.appendValueInput('list')
    .setCheck('Array')
      .appendField('to list');
    this.setInputsInline(true)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(255);
  }
};
Blockly.common.defineBlocks({list_add: list_add});
                    
javascriptGenerator.forBlock['list_add'] = function(block,generator) {
  const value_item = generator.valueToCode(block, 'item', javascriptGenerator.ORDER_NONE);
  const value_list = generator.valueToCode(block, 'list', javascriptGenerator.ORDER_NONE);

  // TODO: Assemble javascript into the code variable.
  const code = `${value_list}.push(${value_item})\n`;
  return code;
}
}

// input
{
const nextLine = {
  init: function() {
    this.appendEndRowInput('INPUT')
    .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField('nextLine');
    this.setOutput(true, ['String']);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(255);
  }
};
Blockly.common.defineBlocks({nextLine: nextLine});
 

javascriptGenerator.forBlock['nextLine'] = function(block) {
  const code = `input.nextLine()`
  return [code,javascriptGenerator.ORDER_NONE];
}
}

// next int
{
const nextInt = {
  init: function() {
    this.appendEndRowInput('INPUT')
    .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField('nextInt');
    this.setOutput(true, ['Number']);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setStyle('custom_blocks');
    this.setColour(255);
  }
};
Blockly.common.defineBlocks({nextInt: nextInt});
 

javascriptGenerator.forBlock['nextInt'] = function(block) {
  const code = `input.nextInt()`
  return [code,javascriptGenerator.ORDER_NONE];
}
}

// move
{
  const Move = {
  init: function() {
    this.appendValueInput('STEP')
    .setAlign(Blockly.inputs.Align.RIGHT)
    .setCheck('Number')
      .appendField('Move');
    this.appendEndRowInput('none')
    .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField('Step');
    this.setInputsInline(true)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(255);
  }
};
Blockly.common.defineBlocks({Move: Move});
                    
                      
  // Generator cho block
  javascriptGenerator.forBlock["Move"] = function (block, generator) {
    const msg = generator.valueToCode(block, "STEP", javascriptGenerator.ORDER_NONE) || "''";
    const code = `move(${msg})\n`;
    return code;
  };
}

// Turn
{
  const Turn = {
  init: function() {
    this.appendValueInput('TURN')
    .setAlign(Blockly.inputs.Align.RIGHT)
    .setCheck('Number')
      .appendField('Turn');
    this.appendEndRowInput('none')
    .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField('Degree');
    this.setInputsInline(true)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(255);
  }
};
Blockly.common.defineBlocks({Turn: Turn});
                    
                      
  // Generator cho block
  javascriptGenerator.forBlock["Turn"] = function (block, generator) {
    const msg = generator.valueToCode(block, "TURN", javascriptGenerator.ORDER_NONE) || "''";
    const code = `turn(${msg})\n`;
    return code;
  };
}

// Color random
{
  const random_color = {
  init: function() {
    this.appendEndRowInput('COLOR')
      .appendField('Random Color');
    this.setInputsInline(true)
    this.setOutput(true, "String");
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(15);
  }
};
Blockly.common.defineBlocks({random_color: random_color});

javascriptGenerator.forBlock['random_color'] = function() {
  const code = `randomColor()`
  return [code, javascriptGenerator.ORDER_NONE];
}
}

// color
{
  const Color_picker = {
  init: function() {
    this.appendEndRowInput('NAME')
      .appendField( 'color')
      .appendField(new FieldColour("#ff0000"), "NAME");
    this.setInputsInline(true)
    this.setOutput(true, "String");
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(15);
    }
  };
  Blockly.common.defineBlocks({Color_picker: Color_picker});
  javascriptGenerator.forBlock['Color_picker'] = function(block,generator) {
  const colour_name = block.getFieldValue('NAME');
  const co = colour_name.toString();
  const code = `"${co}"`
  return [code, javascriptGenerator.ORDER_NONE];
}
}

// direction 
{
  const Direction = {
  init: function() {
    this.appendEndRowInput('NAME')
      .appendField('Direction');
    this.setInputsInline(true)
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(255);
  }
};
Blockly.common.defineBlocks({Direction: Direction});
    javascriptGenerator.forBlock['Direction'] = function() {
    const code = 'direction';
  return [code, javascriptGenerator.ORDER_NONE];
}
}