import React, { Component } from 'react';
// import AceEditor from 'react-ace';
// import 'brace/theme/monokai';
// import 'brace/mode/javascript';
import { StyledButton } from './Button';
import styled from 'styled-components';
import MonacoEditor from 'react-monaco-editor';

interface EditorProps {
  code: string;
  onChange?: (code: string) => void;
  height?: number | string;
  changeText?: string;
}

const StyledEditor = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 1rem;
`;

export class Editor extends Component<EditorProps> {
  state = {
    code: this.props.code
  };
  render() {
    const { code } = this.state;
    const { onChange, height = '100%', changeText = 'Update' } = this.props;

    function editorDidMount(editor: any, monaco: any) {
      console.log('editorDidMount', editor, monaco)
      editor.focus();
    }

    return (
      <StyledEditor>
        <MonacoEditor
            language="javascript"
            width="100%"
            height={height as string}
            theme="vs-dark"
            value={code}
            // options={options}
            onChange={value => this.setState({ code: value })}
            editorDidMount={editorDidMount}
          />
        );
        {/* <AceEditor
          mode="javascript"
          theme="monokai"
          editorProps={{ $blockScrolling: true }}
          value={code}
          onChange={value => this.setState({ code: value })}
          setOptions={{ tabSize: 2, fontSize: '12px' }}
          width="100%"
          height={height as string}
          showGutter={false}
          readOnly={!onChange}
        /> */}
        {onChange ? (
          <StyledButton onClick={() => onChange(this.state.code)}>
            {changeText}
          </StyledButton>
        ) : null}
      </StyledEditor>
    );
  }
}
