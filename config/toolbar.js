import SimpleMDE from "simplemde";
import { FileUpload } from "../mixins/Fileupload";
export default toolbar = [
    {
        name: "bold",
        action: SimpleMDE.toggleBold,
        className: "fa fa-bold",
        title: "Bold",
        default: true
    },
    {
        name: "italic",
        action: SimpleMDE.toggleItalic,
        className: "fa fa-italic",
        title: "Italic",
        default: true
    },
    {
        name: "heading",
        action: SimpleMDE.toggleHeadingSmaller,
        className: "fa fa-header",
        title: "Heading",
        default: true
    },
    "|",
    {
        name: "code",
        action: SimpleMDE.toggleCodeBlock,
        className: "fa fa-code",
        title: "Code"
    },
    {
        name: "quote",
        action: SimpleMDE.toggleBlockquote,
        className: "fa fa-quote-left",
        title: "Quote",
        default: true
    },
    {
        name: "unordered-list",
        action: SimpleMDE.toggleUnorderedList,
        className: "fa fa-list-ul",
        title: "Generic List",
        default: true
    },
    {
        name: "ordered-list",
        action: SimpleMDE.toggleOrderedList,
        className: "fa fa-list-ol",
        title: "Numbered List",
        default: true
    },
    {
        name: "clean-block",
        action: SimpleMDE.cleanBlock,
        className: "fa fa-eraser fa-clean-block",
        title: "Clean block"
    },
    "|",
    {
        name: "link",
        action: SimpleMDE.drawLink,
        className: "fa fa-link",
        title: "Create Link",
        default: true
    },
    {
        name: "image",
        action: function uploadImage() {
            FileUpload.methods.ImageUpload()
        },
        className: "fa fa-picture-o",
        title: "Insert Image",
        default: true
    },
    {
        name: "table",
        action: SimpleMDE.drawTable,
        className: "fa fa-table",
        title: "Insert Table"
    },
    {
        name: "horizontal-rule",
        action: SimpleMDE.drawHorizontalRule,
        className: "fa fa-minus",
        title: "Insert Horizontal Line"
    },
    "|",
    {
        name: "preview",
        action: SimpleMDE.togglePreview,
        className: "fa fa-eye no-disable",
        title: "Toggle Preview",
        default: true
    },
    {
        name: "side-by-side",
        action: SimpleMDE.toggleSideBySide,
        className: "fa fa-columns no-disable no-mobile",
        title: "Toggle Side by Side",
        default: true
    },
    {
        name: "fullscreen",
        action: SimpleMDE.toggleFullScreen,
        className: "fa fa-arrows-alt no-disable no-mobile",
        title: "Toggle Fullscreen",
        default: true
    },
    "|",
    {
        name: "guide",
        action: "https://SimpleMDE.com/markdown-guide",
        className: "fa fa-question-circle",
        title: "Markdown Guide",
        default: true
    },
    "|",
    {
        name: "undo",
        action: SimpleMDE.undo,
        className: "fa fa-undo no-disable",
        title: "Undo"
    },
    {
        name: "redo",
        action: SimpleMDE.redo,
        className: "fa fa-repeat no-disable",
        title: "Redo"
    }
];