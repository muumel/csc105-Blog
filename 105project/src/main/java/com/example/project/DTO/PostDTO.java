package com.example.project.DTO;

public class PostDTO {
    private String author_name;
    private String title;
    private String content;
    private String articlepic;
    private String type;

    public String getAuthor_name() {
        return author_name;
    }

    public void setAuthor_name(String author_name) {
        this.author_name = author_name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getArticlepic() {
        return articlepic;
    }

    public void setArticlepic(String articlepic) {
        this.articlepic = articlepic;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
