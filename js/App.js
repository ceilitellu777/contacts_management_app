const appContent = `
    <div class="container">
    <h2 id="main_title">YourContactSave App</h2>
    <div id="form_list_container">
        <div id="form_contact">
            <h3 class="sub_title">FORMULAIRE DE CONTACT</h3>
            <form class="form">
                <p class="form_label"><label for="prenom">Prénom</label></p>
                <p><input type="text" id="prenom" class="main_inputs"></p>
                <p class="form_label"><label for="name">Name</label></p>
                <p><input type="text" id="nom" class="main_inputs"></p>
                <p class="form_label"><label for="groupe">Groupe</label></p>
                <p><select id="groupe" class="main_inputs">
                    <option value="CEO & CTO">CEO & CTO</option>
                    <option value="Community manager">Community manager</option>
                    <option value="Marketing head">Marketing head</option>
                </select></p>
                <p class="form_label"><label for="bio">Bio</label></p>
                <p><textarea id="bio" cols="30" rows="10" id="bio"></textarea></p>
                <div id="form_foot">
                    <label for="contact_picture" id="img_load">Choisir un fichier</label>
                    <input type="file" id="contact_picture">
                    <img src="img/avatar.png" alt="profile_img" id="img_preview">
                </div>
                <div id="end_btn_container">
                    <input type="submit" value="Créer" id="sendData">
                    <input type="reset" value="Réinit">
                </div>
            </form>
        </div>
        <div id="list_container">
            <h3 class="sub_title">LISTE DES CONTACTS</h3>
            <div class="contacts">
                <div id="items_container">
                    <!-- <div id="list_item">
                        <div id="picture_block">
                            <img src="img/8.jpg" alt="contact_profile">
                        </div>
                        <div id="contact_cred">
                            <p>Prénom: <span>???</span></p>
                            <p>Groupe: <span>???</span></p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Hic et, asperiores doloribus a molestiae porro enim 
                                quas, mollitia repellendus facilis ad error beatae 
                                laboriosam perspiciatis necessitatibus! 
                                Cum nisi laboriosam sapiente!</p>
                        </div>
                        <p id="removeItem">X</p>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    </div>
`;

export default appContent;
