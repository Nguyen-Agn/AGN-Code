import {installAllBlocks as installColourBlocks} from '@blockly/field-colour';
import { javascriptGenerator } from 'blockly/javascript';
installColourBlocks({
  javascript: javascriptGenerator,
});

export default {
      "kind": "categoryToolbox",
      "contents": [
        {
          "kind": "category",
          "name": "Logic",
          "categorystyle": "logic_category",
          "contents": [
            {"kind": "block","type": "controls_if"},
            {"kind": "block","type":"controls_ifelse"},
            {"kind": "block","type": "logic_compare"},
            {"kind": "block","type": "logic_negate"},
            {"kind": "block","type": "logic_operation"},
            {"kind": "block","type":"logic_boolean"},
            {"kind": "block","type":"logic_null"},
            {"kind": "block","type":"logic_ternary"}
          ]
        },
        {
      "kind": "category",
      "name": "Math",
      "categorystyle": "math_category",
      "contents": [
        {"kind": "block", "type": "math_number"},
        {"kind": "block", "type": "math_arithmetic"},
        {"kind": "block", "type": "math_single"},
        {"kind": "block", "type": "math_trig"},
        {"kind": "block", "type": "math_constant"},
        {"kind": "block", "type": "math_number_property"},
        {"kind": "block", "type": "math_round"},
        {"kind": "block", "type": "math_on_list"},
        {"kind": "block", "type": "math_modulo"},
        {"kind": "block", "type": "math_constrain"},
        {"kind": "block", "type": "math_random_int"},
        {"kind": "block", "type": "math_random_float"},
        {"kind": "block", "type": "math_atan2"}
      ]
      },
      {
        "kind":"category",
        "name":"Text",
        "categorystyle":"text_category",
        "contents":[
          {"kind": "block","type": "text"},
          {"kind": "block","type":"text_join"},
          {"kind": "block","type": "text_append"},
          {"kind": "block","type": "text_isEmpty"},
          {"kind": "block","type": "text_length"},
          {"kind": "block","type": "text_charAt"},
          {"kind": "block","type": "text_indexOf"},
          {"kind": "block","type": "text_getSubstring"},
          {"kind": "block","type": "text_changeCase"},
          {"kind":"block","type":"text_prompt_ext"},
          {"kind": "block","type": "text_trim"}
        ]
      },{
        "kind":"category",
        "name":"Loop",
        "categorystyle":"loop_category",
        "contents":[
          {"kind": "block","type": "controls_repeat"},
          {"kind": "block","type": "controls_repeat_ext"},
          {"kind": "block","type": "controls_whileUntil"},
          {"kind": "block","type": "controls_for"},
          {"kind": "block","type": "controls_forEach"},
          {"kind": "block","type": "controls_flow_statements"},
        ]
      },{
        "kind":"category",
        "name":"Var",
        "categorystyle":"variable_category",
        "custom":"VARIABLE",
      },{
        "kind":"category",
        "name":"List",
        "categorystyle":"list_category",
        "contents":[
          {"kind": "block","type": "lists_create_with"},
          {"kind":"block","type":"lists_create_empty"},
          {"kind": "block","type": "lists_repeat"},
          {"kind": "block","type": "lists_length"},
          {"kind": "block","type": "lists_isEmpty"},
          {"kind": "block","type": "lists_indexOf"},
          {"kind": "block","type": "lists_getIndex"},
          {"kind": "block","type": "lists_setIndex"},
          {"kind": "block","type": "list_add"},
          {"kind":"block","type":"lists_getSublist"},
          {"kind":"block","type":"lists_split"},
          {"kind":"block","type":"lists_sort"},
          {"kind":"block","type":"lists_reverse"}
        ]
      },{
        "kind":"category",
        "name":"Procedures",
        "categorystyle":"procedure_category",
        "custom":"PROCEDURE"
      },{
        "kind":"category",
        "name":"In-Out",
        "categorystyle": "input_category",
        "contents": [
          {"kind":"block","type": "Print"},
          {"kind":"block","type":"Println"},
          {"kind":"block","type":"nextLine"},
          {"kind":"block","type":"nextInt"}
        ]
      },{
        "kind":"category",
        "name":"Characters",
        "categorystyle": "char_category",
        "contents": [
          {"kind":"block","type": "Move"},
          {"kind":"block","type": "Turn"}
        ]
      },{
        "kind":"category",
        "name":"Colour",
        "categorystyle": "colour_category",
        "contents": [
          {"kind":"block","type":"Color_picker"},
          {"kind":"block","type":"random_color"},
        ]
      }]
    };