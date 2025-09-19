import * as Blockly from 'blockly/core';

// ========== CUSTOM THEME ==========
const CustomTheme = Blockly.Theme.defineTheme('customTheme', {
  // Base theme
  'base': Blockly.Themes.Classic,
  
  // Category styles (màu cho categories trong toolbox)
  'categoryStyles': {
    'logic_category': {
      'colour': '#5C81A6'  // Xanh dương đậm
    },
    'loop_category': {
      'colour': '#5CA65C'  // Xanh lá
    },
    'math_category': {
      'colour': '#5C68A6'  // Tím
    },
    'text_category': {
      'colour': '#5CA68D'  // Xanh ngọc
    },
    'list_category': {
      'colour': '#745CA6'  // Tím đậm
    },
    'colour_category': {
      'colour': '#A6745C'  // Nâu
    },
    'variable_category': {
      'colour': '#A65C81'  // Hồng
    },
    'procedure_category': {
      'colour': '#995C5C'  // Đỏ nâu
    },
    'custom_category': {
      'colour': '#FF6B35'  // Cam
    },
    'api_category': {
      'colour': '#1E88E5'  // Xanh dương sáng
    },
    'input_category': {
        'colour': '#113452'
    },
    'char_category': {
        'colour': '#af1248'
    }
  },
  
  // Block styles (màu cho từng loại block)
  
  /*/ Component styles (style cho các component UI)
  'componentStyles': {
    'workspaceBackgroundColour': '#F5F5F5',
    'toolboxBackgroundColour': '#FFFFFF',
    'toolboxForegroundColour': '#2C3E50',
    'flyoutBackgroundColour': '#F8F9FA',
    'flyoutForegroundColour': '#2C3E50',
    'flyoutOpacity': 0.95,
    'scrollbarColour': '#CCCCCC',
    'insertionMarkerColour': '#4CAF50',
    'insertionMarkerOpacity': 0.8,
    'markerColour': '#FFC107',
    'cursorColour': '#2196F3'
  }*/
  
  // Font styles
  'fontStyle': {
    'family': 'Roboto, Arial, sans-serif',
    'weight': 'normal',
    'size': 14
  }
});

export default CustomTheme;