function Home() {
    return (
        <>
            <h1>Cadastro Cliente</h1>
            <div>
                <form action="">
                    <table>
                        <tr>
                            <td>CPF</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Nome do Cliente (Completo - sem abreviações)</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Nome do Cliente (Formato Reduzido)</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Declaração de Propósitos</td>
                            <td>
                                <input type="checkbox" name="movimentaContaDepositoPoupanca" /><b>Movimentação de Conta de Depósito/Poupança</b> <br />
                                <input type="checkbox" name="emprestimosFinanciamentos" /><b>Empréstimos/Financiamentos</b><br /><b>Financiamento Habitacional</b>
                                <input type="radio" id="habitacionalSIM" name="habitacional" value="true" disabled="" /><b>SIM</b>
                                <input type="radio" id="habitacionalNAO" name="habitacional" value="false" disabled="" /><b>NÃO</b><br />
                                <input type="checkbox" id="investimentos" name="investimentos" /><b>Investimentos</b> <br />
                                <input type="checkbox" id="cartaoCredito" name="cartaoCredito" /><b>Cartão de Crédito</b> <br />
                                <input type="checkbox" id="seguroPrevidenciaCapitalizacaoConsorcios" name="seguroPrevidenciaCapitalizacaoConsorcios" /><b>Seguros/Previdência Privada/Capitalização/Consórcios</b> <br />
                                <input type="checkbox" id="operacoesInternacionaisCambio" name="operacoesInternacionaisCambio" /><b>Operações Internacionais/Câmbio</b> <br />
                            </td>
                        </tr>
                        <tr>
                            <td>Data de Nascimento</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Sexo</td>
                            <td>
                                <select name="sexo" id="sexo">
                                    <option value="" selected></option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Nacionalidade</td>
                            <td>
                                <select name="naturalidade" id="naturalidade">
                                    <option value="" selected></option>
                                    <option value="brasileira">Brasileira</option>
                                    <option value="brasileiro_naturalizado">Brasileiro Naturalizado</option>
                                    <option value="brasileiro_nascido_exterior">Brasileiro Nascido no Exterior</option>
                                    <option value="estrangeira">Estrangeira</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>País de Nacionalidade</td>
                            <td>
                                <select name="pais_naturalidade" id="pais_naturalidade">
                                    <option value="" selected></option>
                                    <option value="0021">ARGENTINA</option>
                                    <option value="0022">BOLIVIA</option>
                                    <option value="0023">CHILE</option>
                                    <option value="0024">PARAGUAI</option>
                                    <option value="0025">URUGUAI</option>
                                    <option value="0026">COLOMBIA</option>
                                    <option value="0027">EQUADOR</option>
                                    <option value="0028">ANTIGUA E BARBUDA</option>
                                    <option value="0029">ANTILHAS HOLANDESAS</option>
                                    <option value="0030">ALEMANHA</option>
                                    <option value="0031">BELGICA</option>
                                    <option value="0032">REINO UNIDO (EX GRA BRETANHA)</option>
                                    <option value="0033">ARUBA</option>
                                    <option value="0034">CANADA</option>
                                    <option value="0035">ESPANHA</option>
                                    <option value="0036">EUA</option>
                                    <option value="0037">FRANCA</option>
                                    <option value="0038">SUICA</option>
                                    <option value="0039">ITALIA</option>
                                    <option value="0040">BAHAMAS, COMUNIDADE DAS</option>
                                    <option value="0041">JAPAO</option>
                                    <option value="0042">CHINA</option>
                                    <option value="0043">COREIA DO SUL</option>
                                    <option value="0044">BARBADOS</option>
                                    <option value="0045">PORTUGAL</option>
                                    <option value="0046">BELIZE</option>
                                    <option value="0047">TURKS E CAICOS, ILHAS</option>
                                    <option value="0051">COSTA RICA</option>
                                    <option value="0052">CUBA</option>
                                    <option value="0053">CURACAO</option>
                                    <option value="0054">DOMINICA, COMUNIDADE</option>
                                    <option value="0055">DOMINICANA, REPUBLICA (OU SAO</option>
                                    <option value="0056">EL SALVADOR, REPUBLICA DE</option>
                                    <option value="0057">ANTILHAS, ESTADOS ASSOCIADOS D</option>
                                    <option value="0058">FALKLANDS, ILHAS (MALVINAS)</option>
                                    <option value="0059">GRANADA</option>
                                    <option value="0060">GUADALUPE, ILHAS</option>
                                    <option value="0061">GUATEMALA</option>
                                    <option value="0062">HAITI, REPUBLICA DO</option>
                                    <option value="0063">HONDURAS BRITANICAS</option>
                                    <option value="0064">HONDURAS</option>
                                    <option value="0065">SERRANAS, ILHAS</option>
                                    <option value="0066">JAMAICA</option>
                                    <option value="0067">MALVINAS, ILHAS</option>
                                    <option value="0068">MARTINICA</option>
                                    <option value="0069">MILHOS, ILHAS</option>
                                    <option value="0070">MONTE SERRAT</option>
                                    <option value="0071">NICARAGUA</option>
                                    <option value="0072">PANAMA</option>
                                    <option value="0073">PANAMA, ZONA DO CANAL</option>
                                    <option value="0074">PORTO RICO</option>
                                    <option value="0075">QUITASUENO</option>
                                    <option value="0076">RONCADOR</option>
                                    <option value="0077">SANTA LUCIA</option>
                                    <option value="0078">SAO CRISTOVAO (E NEVIS)</option>
                                    <option value="0079">SAO VICENTE (E GRANADINAS)</option>
                                    <option value="0080">TURCA, ILHAS</option>
                                    <option value="0081">VIRGENS BRITANICAS, ILHAS</option>
                                    <option value="0082">VIRGENS AMERICANS, ILHAS</option>
                                    <option value="0083">BERMUDAS</option>
                                    <option value="0084">GROELANDIA</option>
                                    <option value="0085">MEXICO</option>
                                    <option value="0086">SAINT PIERRE ET MIQUELON</option>
                                    <option value="0087">GUIANA FRANCESA</option>
                                    <option value="0088">GUIANA, REPUBLICA</option>
                                    <option value="0089">PERU</option>
                                    <option value="0090">SURINAME</option>
                                    <option value="0091">TRINIDAD E TOBAGO</option>
                                    <option value="0092">VENEZUELA</option>
                                    <option value="0093">ALBANIA</option>
                                    <option value="0094">ANDORRA</option>
                                    <option value="0095">AUSTRIA</option>
                                    <option value="0096">BULGARIA</option>
                                    <option value="0097">CHIPRE</option>
                                    <option value="0098">DINAMARCA</option>
                                    <option value="0099">EIRE</option>
                                    <option value="0100">ESCOCIA</option>
                                    <option value="0101">FEROES, ILHAS</option>
                                    <option value="0102">FINLANDIA</option>
                                    <option value="0103">GIBRALTAR</option>
                                    <option value="0104">GRECIA</option>
                                    <option value="0105">HOLANDA (OU PAISES BAIXOS)</option>
                                    <option value="0106">HUNGRIA</option>
                                    <option value="0107">BALEARES, ILHAS</option>
                                    <option value="0108">COSMOLEDO, ILHAS</option>
                                    <option value="0109">CANAL, ILHAS DO</option>
                                    <option value="0110">INGLATERRA</option>
                                    <option value="0111">IRLANDA DO NORTE</option>
                                    <option value="0112">IRLANDA</option>
                                    <option value="0113">ISLANDIA</option>
                                    <option value="0114">IUGUSLAVIA</option>
                                    <option value="0115">LIECHTENSTEIN</option>
                                    <option value="0116">LUXEMBURGO</option>
                                    <option value="0117">MAN, ILHAS DE</option>
                                    <option value="0118">MONACO</option>
                                    <option value="0119">NORUEGA</option>
                                    <option value="0120">MALTA, REPUBLICA DE</option>
                                    <option value="0121">PAIS DE GALES</option>
                                    <option value="0122">PAISES BAIXOS (OU HOLANDA)</option>
                                    <option value="0123">POLONIA</option>
                                    <option value="0124">ROMENIA</option>
                                    <option value="0125">SAO MARINHO</option>
                                    <option value="0126">SUECIA</option>
                                    <option value="0127">SVALBARD E JAN MAYER, ILHAS</option>
                                    <option value="0128">TCHECOSLOVAQUIA (ATUAL REPUBLI</option>
                                    <option value="0129">VATICANO, ESTADO DA CIDADE DO</option>
                                    <option value="0130">CROACIA</option>
                                    <option value="0131">SERVIA</option>
                                    <option value="0132">ESLOVENIA</option>
                                    <option value="0133">MACEDONIA, REPUBLICA DA</option>
                                    <option value="0134">BOSNIA HERZEGOVINA</option>
                                    <option value="0135">TCHECA, REPUBLICA (EX TCHECOSL</option>
                                    <option value="0136">ESLOVAQUIA</option>
                                    <option value="0137">MONTENEGRO</option>
                                    <option value="0138">AZERBAIJAO</option>
                                    <option value="0139">BASHKISTA</option>
                                    <option value="0140">BELARUS (BIELORRUSSIA, REPUBLI</option>
                                    <option value="0141">BURYAT</option>
                                    <option value="0142">CARELIA</option>
                                    <option value="0143">CASAQUISTAO</option>
                                    <option value="0144">CHECHEN INGUSTH</option>
                                    <option value="0145">CHUVASH</option>
                                    <option value="0146">DAGESTA</option>
                                    <option value="0147">ESTONIA</option>
                                    <option value="0148">GEORGIA</option>
                                    <option value="0149">GORNO ALTAI</option>
                                    <option value="0150">KABARDINO BALKAR</option>
                                    <option value="0151">KALMIR</option>
                                    <option value="0152">KARACHAEVOCHERKESS</option>
                                    <option value="0153">KHAKASS</option>
                                    <option value="0154">KOMI</option>
                                    <option value="0155">LETONIA</option>
                                    <option value="0156">LITUANIA</option>
                                    <option value="0157">MARI</option>
                                    <option value="0158">MOLDAVIA</option>
                                    <option value="0159">OSSETIA SETENTRIONAL</option>
                                    <option value="0160">QUIRQUISTAO</option>
                                    <option value="0161">TADJIQUISTAO</option>
                                    <option value="0162">TARTARIA</option>
                                    <option value="0163">TURCOMENISTAO (OU TURMOMENIA)</option>
                                    <option value="0164">TUVIN</option>
                                    <option value="0165">UCRANIA</option>
                                    <option value="0166">UDMURT</option>
                                    <option value="0167">UNIAO SOVIETICA</option>
                                    <option value="0168">USBEQUISTAO</option>
                                    <option value="0169">YAKUT</option>
                                    <option value="0170">ABISSINIA (ATUAL ETIOPIA)</option>
                                    <option value="0171">ACORES</option>
                                    <option value="0172">AFAR FRANCES (ATUAL DJIBUTI)</option>
                                    <option value="0173">AFRICA DO SUL, REPUBLICA DA</option>
                                    <option value="0174">ALTO VOLTA (ATUAL BURKINA FASS</option>
                                    <option value="0175">ANGOLA</option>
                                    <option value="0176">ARGELIA</option>
                                    <option value="0177">BECHUANA (ATUAL BTSUANA)</option>
                                    <option value="0178">BENIN</option>
                                    <option value="0179">BOTSWANA</option>
                                    <option value="0180">BURUNDI</option>
                                    <option value="0181">CAMAROES</option>
                                    <option value="0182">CEUTA E MELILLA</option>
                                    <option value="0183">CHADE</option>
                                    <option value="0184">COMOROS, ILHAS</option>
                                    <option value="0185">CONGO, REPUBLICA DO</option>
                                    <option value="0186">COSTA DO MARFIM</option>
                                    <option value="0187">DAOME (ATUAL BENIN)</option>
                                    <option value="0188">DJIBUTI</option>
                                    <option value="0189">EGITO, REBUPLICA ARABE DO</option>
                                    <option value="0190">ETIOPIA</option>
                                    <option value="0191">GABAO, REPUBLICA DO</option>
                                    <option value="0192">GAMBIA</option>
                                    <option value="0193">GANA</option>
                                    <option value="0194">GAZA</option>
                                    <option value="0195">GUINE</option>
                                    <option value="0196">GUINE EQUATORIAL</option>
                                    <option value="0197">INFNI</option>
                                    <option value="0198">ASCENSAO E TRISTAO DA CUNHA, I</option>
                                    <option value="0199">CANARIAS, ILHAS</option>
                                    <option value="0200">LESOTO</option>
                                    <option value="0201">LIBERIA</option>
                                    <option value="0202">LIBIA</option>
                                    <option value="0203">MADEIRA</option>
                                    <option value="0204">MALAWI (OU MALAUI)</option>
                                    <option value="0205">MADAGASCAR</option>
                                    <option value="0206">MALI</option>
                                    <option value="0207">MARROCOS</option>
                                    <option value="0208">MAURICIO</option>
                                    <option value="0209">MAURITANIA</option>
                                    <option value="0210">MOCAMBIQUE</option>
                                    <option value="0211">NGUANE</option>
                                    <option value="0212">NIGER, REPUBLICA DO</option>
                                    <option value="0213">NIGERIA</option>
                                    <option value="0214">PAPUA NOVA GUINE</option>
                                    <option value="0215">AFRICANA, PRACAS NORTE</option>
                                    <option value="0216">AFRICANO,  PROTETOR DO SUDOEST</option>
                                    <option value="0217">QUENIA</option>
                                    <option value="0218">AFRICANA, REPUBLICA CENTRAL</option>
                                    <option value="0219">REUNIAO</option>
                                    <option value="0220">RODESIA (ATUAL ZIMBABWE)</option>
                                    <option value="0221">RUANDA</option>
                                    <option value="0222">SAARA ESPANHOL</option>
                                    <option value="0223">SANTA HELENA</option>
                                    <option value="0224">SAO TOME E PRINCIPE</option>
                                    <option value="0225">SEYCHELLES</option>
                                    <option value="0226">SERRA LEOA</option>
                                    <option value="0227">SOMALIA, REPUBLICA</option>
                                    <option value="0228">SUAZILANDIA</option>
                                    <option value="0229">SUDAO</option>
                                    <option value="0230">TANGANICA</option>
                                    <option value="0231">OCEANO INDICO, TERRITORIO BRIT</option>
                                    <option value="0232">TRANSKEI</option>
                                    <option value="0233">TOGO</option>
                                    <option value="0234">TUNISIA</option>
                                    <option value="0235">UGANDA</option>
                                    <option value="0236">CONGO, REPUBLICA DEMOCRATICA (</option>
                                    <option value="0237">ZAMBIA</option>
                                    <option value="0238">BURKINA FASSO</option>
                                    <option value="0239">ZIMBABWE</option>
                                    <option value="0240">NAMIBIA</option>
                                    <option value="0241">AFEGANISTAO</option>
                                    <option value="0242">ARABIA SAUDITA</option>
                                    <option value="0243">BAHRAIN</option>
                                    <option value="0244">BIRMANIA</option>
                                    <option value="0245">BRUNEI</option>
                                    <option value="0246">BUTAO</option>
                                    <option value="0247">CATAR</option>
                                    <option value="0248">CEILAO (ATUAL SRI-LANKA)</option>
                                    <option value="0249">TAIWAN(REPUBLICA CHINA/ILHA FO</option>
                                    <option value="0250">COVEITE (ATUAL KUWAIT)</option>
                                    <option value="0251">EMIRADOS ARABES UNIDOS</option>
                                    <option value="0252">FILIPINAS</option>
                                    <option value="0253">HONG-KONG (CHINA)</option>
                                    <option value="0254">IEMEN</option>
                                    <option value="0255">INDIA</option>
                                    <option value="0256">INDONESIA</option>
                                    <option value="0257">IRA</option>
                                    <option value="0258">IRAQUE</option>
                                    <option value="0259">ISRAEL</option>
                                    <option value="0260">JORDANIA</option>
                                    <option value="0261">CAMBOJA (KMER)</option>
                                    <option value="0262">KUWAIT</option>
                                    <option value="0263">LAOS</option>
                                    <option value="0264">LIBANO</option>
                                    <option value="0265">MACAU (CHINA)</option>
                                    <option value="0266">MALASIA</option>
                                    <option value="0267">MALDIVAS, ILHAS</option>
                                    <option value="0268">MASCATE</option>
                                    <option value="0269">MONGOLIA</option>
                                    <option value="0270">NEPAL</option>
                                    <option value="0271">OMAN</option>
                                    <option value="0272">PALESTINA</option>
                                    <option value="0273">PAQUISTAO</option>
                                    <option value="0274">RUIQUIU, ILHAS</option>
                                    <option value="0275">SINGAPURA (OU CINGAPURA)</option>
                                    <option value="0276">SEQUIN</option>
                                    <option value="0277">SIRIA</option>
                                    <option value="0278">SRI-LANKA</option>
                                    <option value="0279">TAILANDIA</option>
                                    <option value="0280">TREGUA, ESTADO</option>
                                    <option value="0281">TURQUIA</option>
                                    <option value="0282">VIETNA DO NORTE</option>
                                    <option value="0283">VIETNA DO SUL</option>
                                    <option value="0284">MIANMAR</option>
                                    <option value="0285">MANAHIKI, ARQUIPELAGO</option>
                                    <option value="0286">MIDWAY, ILHAS</option>
                                    <option value="0287">ASHMORE E CARTIER</option>
                                    <option value="0288">AUSTRALIA</option>
                                    <option value="0289">BISMARK, ARQUIPELAGO DE</option>
                                    <option value="0290">COOK, ILHAS</option>
                                    <option value="0291">FIJI, REPUBLICA DE</option>
                                    <option value="0292">GUAN</option>
                                    <option value="0293">BAKER, ILHAS</option>
                                    <option value="0294">CANTAO E ENDERBURG, ILHAS</option>
                                    <option value="0295">CAROLINAS, ILHAS</option>
                                    <option value="0296">PACIFICO, ILHAS DO</option>
                                    <option value="0297">CHRISTMAS, ILHAS</option>
                                    <option value="0298">KIRIBATI (ANTIGA GILBERT, ILHA</option>
                                    <option value="0299">HOWLAND E JARVIS, ILHAS</option>
                                    <option value="0300">JOHNSTON E SAND, ILHAS</option>
                                    <option value="0301">KINGMAN REEF, ILHAS</option>
                                    <option value="0302">MACQUAIRE, ILHAS</option>
                                    <option value="0303">MARIANAS, ILHAS</option>
                                    <option value="0304">MARSHALL, ILHAS</option>
                                    <option value="0305">MACDONAL E HEARD, ILHAS</option>
                                    <option value="0306">NIEU, ILHAS</option>
                                    <option value="0307">NORFOLK, ILHAS</option>
                                    <option value="0308">PALAU, ILHAS</option>
                                    <option value="0309">SALOMAO, ILHAS</option>
                                    <option value="0310">TOKELAU, ILHAS</option>
                                    <option value="0311">WAKE, ILHAS</option>
                                    <option value="0312">KALIMATAN</option>
                                    <option value="0313">LINHA, ILHAS</option>
                                    <option value="0314">NAURU</option>
                                    <option value="0315">NOVA CALEDONIA, ILHAS</option>
                                    <option value="0316">NOVA GUINE</option>
                                    <option value="0317">NOVA ZELANDIA</option>
                                    <option value="0318">NOVAS HEBRIDAS, ILHAS (EX VANU</option>
                                    <option value="0319">PAPUA, TERRITORIO DE</option>
                                    <option value="0320">PASCOA, ILHAS</option>
                                    <option value="0321">PITCAIRIN, ILHAS</option>
                                    <option value="0322">POLINESIA FRANCESA</option>
                                    <option value="0323">SABAH</option>
                                    <option value="0324">SAMOA AMERICANA (OU SAMOA ORIE</option>
                                    <option value="0325">SAMOA OCIDENTAL</option>
                                    <option value="0326">SANTA CRUZ, ILHAS</option>
                                    <option value="0327">SARAWAK</option>
                                    <option value="0328">COCOS, TERRITORIO DE</option>
                                    <option value="0329">TIMOR (OU TIMOR LESTE)</option>
                                    <option value="0330">TONGAS</option>
                                    <option value="0331">TUVALU</option>
                                    <option value="0332">WALLIS E FUTUNA, ILHAS</option>
                                    <option value="0333">BRITANICO, TERRITORIO ANTARTIC</option>
                                    <option value="0334">FRANCESA, ANTARTICA</option>
                                    <option value="0335">AUSTRALIA, TERRITORIO ANTARTIC</option>
                                    <option value="0336">CHILENO, ANTARTICO</option>
                                    <option value="0337">ARGENTINO, ANTARTICO</option>
                                    <option value="0338">NORUEGES, ANTARTICO</option>
                                    <option value="0339">APATRIDA</option>
                                    <option value="0340">ROSS, DEPENDENCIA DE (NOVA ZEL</option>
                                    <option value="0341">TERRAS AUSTRAIS</option>
                                    <option value="0342">BANGLADESH</option>
                                    <option value="0343">CABO VERDE</option>
                                    <option value="0344">GUINE BISSAU</option>
                                    <option value="0345">IEMEN DO SUL</option>
                                    <option value="0346">KARA KALPAK</option>
                                    <option value="0347">ARMENIA</option>
                                    <option value="0348">RUSSIA</option>
                                    <option value="0349">SENEGAL</option>
                                    <option value="0350">TANZANIA</option>
                                    <option value="0351">COREIA DO NORTE</option>
                                    <option value="0352">ANGUILLA</option>
                                    <option value="0353">CAYMAN, ILHAS</option>
                                    <option value="0354">LABUAN, ILHAS</option>
                                    <option value="0355">MICRONESIA</option>
                                    <option value="0356">NIUE</option>
                                    <option value="0357">SAARA OCIDENTAL</option>
                                    <option value="0358">VIETNA</option>
                                    <option value="0359">ERITREIA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Naturalidade UF</td>
                            <td>
                                <select name="naturalidade_uf" id="naturalidade_uf">
                                    <option value=""></option>
                                    <option value="27">AL</option>
                                    <option value="12">AC</option>
                                    <option value="13">AM</option>
                                    <option value="16">AP</option>
                                    <option value="29">BA</option>
                                    <option value="23">CE</option>
                                    <option value="53">DF</option>
                                    <option value="32">ES</option>
                                    <option value="52">GO</option>
                                    <option value="21">MA</option>
                                    <option value="31">MG</option>
                                    <option value="50">MS</option>
                                    <option value="51">MT</option>
                                    <option value="15">PA</option>
                                    <option value="25">PB</option>
                                    <option value="26">PE</option>
                                    <option value="22">PI</option>
                                    <option value="41">PR</option>
                                    <option value="33">RJ</option>
                                    <option value="24">RN</option>
                                    <option value="11">RO</option>
                                    <option value="14">RR</option>
                                    <option value="43">RS</option>
                                    <option value="42">SC</option>
                                    <option value="28">SE</option>
                                    <option value="35">SP</option>
                                    <option value="17">TO</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Naturalidade Cidade</td>
                            <td>
                                <select name="naturalidade_cidade" id="naturalidade_cidade">
                                    <option value="" selected></option>
                                    <option value="">Listar Cidades pela UF</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Nome do Pai</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Nome da Mãe</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Grau de Instrução</td>
                            <td>
                                <select name="grau_instrucao" id="grau_instrucao">
                                    <option value="" selected></option>
                                    <option value="02">ATÉ 4A SÉRIE INCOMPLETA DO ENSINO FUNDAMENTAL</option>
                                    <option value="03">COM 4A SÉRIE COMPLETA DO ENSINO FUNDAMENTAL</option>
                                    <option value="04">DA 5A A 8A SÉRIE INCOMPLETA DO ENSINO FUNDAMENTAL</option>
                                    <option value="05">ENSINO FUNDAMENTAL COMPLETO</option>
                                    <option value="06">ENSINO MÉDIO INCOMPLETO</option>
                                    <option value="07">ENSINO MÉDIO COMPLETO</option>
                                    <option value="08">SUPERIOR INCOMPLETO</option>
                                    <option value="09">SUPERIOR COMPLETO</option>
                                    <option value="10">ESPECIALIZAÇÃO/PÓS GRADUAÇÃO</option>
                                    <option value="11">MESTRADO</option>
                                    <option value="12">DOUTORADO</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>PIS/NIS</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Tipo de Documento de Identificação</td>
                            <td>
                                <select name="tipo_documento" id="tipo_documento">
                                    <option value="" selected></option>
                                    <option value="0372008">DOCUMENTO DE IDENTIFICAÇÃO</option>
                                    <option value="0372102">RIC - REGISTRO DE IDENTIDADE CIVIL</option>
                                    <option value="0781">PASSAPORTE</option>
                                    <option value="0782">CNH - CARTEIRA NACIONAL DE HABILITAÇÃO</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Subtipo do Documento Identificacao</td>
                            <td>
                                <select name="subtipo_documento_identificacao" id="subtipo_documento_identificacao">
                                    <option value="" selected="selected"></option>
                                    <option value="CI">CARTEIRA DE IDENTIDADE</option>
                                    <option value="CF">CARTEIRA FUNCIONAL</option>
                                    <option value="IM">IDENTIDADE MILITAR</option>
                                    <option value="CE">CARTEIRA DE IDENTIDADE ESTRANGEIRA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Número da Identidade</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Numero do Passaporte</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Numero da CNH</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Órgão Emissor Documento Identidade</td>
                            <td>
                                <select name="orgao_emissor_doc_id" id="orgao_emissor_doc_id">
                                    <option value="" selected></option>
                                    <option value="10">SECRETARIA DE SEGURANÇA PÚBLICA</option>
                                    <option value="81">OUTRO TIPO DE ÓRGÃO EMISSOR</option>
                                    <option value="88">SECRETARIA DEFESA SOCIAL</option>
                                    <option value="90">POLÍCIA CIVIL</option>
                                    <option value="91">SECRETARIA DE ESTADO DA CASA CIVIL</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Órgão Emissor RIC</td>
                            <td>
                                <select name="orgao_emissor_ric" id="orgao_emissor_ric">
                                    <option value="" selected></option>
                                    <option value="40">MINISTÉRIO DA JUSTIÇA</option>
                                    <option value="95">OUTRO TIPO DE ÓRGÃO EMISSOR DE RIC</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Órgão Emissor Passaporte</td>
                            <td>
                                <select name="orgao_emissor_passaporte" id="orgao_emissor_passaporte">
                                    <option value="" selected></option>
                                    <option value="40">POLICIA FEDERAL</option>
                                    <option value="95">ORGAO EMISSOR ESTRANGEIRO</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Órgão Emissor CNH</td>
                            <td>
                                <select name="orgao_emissor_cnh" id="orgao_emissor_cnh">
                                    <option value="" selected></option>
                                    <option value="40">ORGAO DE TRANSITO</option>
                                    <option value="95">ORGAO EMISSOR ESTRANGEIRO</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>UF</td>
                            <td><input type="text" /></td>
                        </tr>
                        
                        <tr>
                            <td>País de origem passaporte</td>
                            <td>
                                <select name="pais_passaporte" id="pais_passaporte">
                                    <option value="" selected></option>
                                    <option value="0021">ARGENTINA</option>
                                    <option value="0022">BOLIVIA</option>
                                    <option value="0023">CHILE</option>
                                    <option value="0024">PARAGUAI</option>
                                    <option value="0025">URUGUAI</option>
                                    <option value="0026">COLOMBIA</option>
                                    <option value="0027">EQUADOR</option>
                                    <option value="0028">ANTIGUA E BARBUDA</option>
                                    <option value="0029">ANTILHAS HOLANDESAS</option>
                                    <option value="0030">ALEMANHA</option>
                                    <option value="0031">BELGICA</option>
                                    <option value="0032">REINO UNIDO (EX GRA BRETANHA)</option>
                                    <option value="0033">ARUBA</option>
                                    <option value="0034">CANADA</option>
                                    <option value="0035">ESPANHA</option>
                                    <option value="0036">EUA</option>
                                    <option value="0037">FRANCA</option>
                                    <option value="0038">SUICA</option>
                                    <option value="0039">ITALIA</option>
                                    <option value="0040">BAHAMAS, COMUNIDADE DAS</option>
                                    <option value="0041">JAPAO</option>
                                    <option value="0042">CHINA</option>
                                    <option value="0043">COREIA DO SUL</option>
                                    <option value="0044">BARBADOS</option>
                                    <option value="0045">PORTUGAL</option>
                                    <option value="0046">BELIZE</option>
                                    <option value="0047">TURKS E CAICOS, ILHAS</option>
                                    <option value="0051">COSTA RICA</option>
                                    <option value="0052">CUBA</option>
                                    <option value="0053">CURACAO</option>
                                    <option value="0054">DOMINICA, COMUNIDADE</option>
                                    <option value="0055">DOMINICANA, REPUBLICA (OU SAO</option>
                                    <option value="0056">EL SALVADOR, REPUBLICA DE</option>
                                    <option value="0057">ANTILHAS, ESTADOS ASSOCIADOS D</option>
                                    <option value="0058">FALKLANDS, ILHAS (MALVINAS)</option>
                                    <option value="0059">GRANADA</option>
                                    <option value="0060">GUADALUPE, ILHAS</option>
                                    <option value="0061">GUATEMALA</option>
                                    <option value="0062">HAITI, REPUBLICA DO</option>
                                    <option value="0063">HONDURAS BRITANICAS</option>
                                    <option value="0064">HONDURAS</option>
                                    <option value="0065">SERRANAS, ILHAS</option>
                                    <option value="0066">JAMAICA</option>
                                    <option value="0067">MALVINAS, ILHAS</option>
                                    <option value="0068">MARTINICA</option>
                                    <option value="0069">MILHOS, ILHAS</option>
                                    <option value="0070">MONTE SERRAT</option>
                                    <option value="0071">NICARAGUA</option>
                                    <option value="0072">PANAMA</option>
                                    <option value="0073">PANAMA, ZONA DO CANAL</option>
                                    <option value="0074">PORTO RICO</option>
                                    <option value="0075">QUITASUENO</option>
                                    <option value="0076">RONCADOR</option>
                                    <option value="0077">SANTA LUCIA</option>
                                    <option value="0078">SAO CRISTOVAO (E NEVIS)</option>
                                    <option value="0079">SAO VICENTE (E GRANADINAS)</option>
                                    <option value="0080">TURCA, ILHAS</option>
                                    <option value="0081">VIRGENS BRITANICAS, ILHAS</option>
                                    <option value="0082">VIRGENS AMERICANS, ILHAS</option>
                                    <option value="0083">BERMUDAS</option>
                                    <option value="0084">GROELANDIA</option>
                                    <option value="0085">MEXICO</option>
                                    <option value="0086">SAINT PIERRE ET MIQUELON</option>
                                    <option value="0087">GUIANA FRANCESA</option>
                                    <option value="0088">GUIANA, REPUBLICA</option>
                                    <option value="0089">PERU</option>
                                    <option value="0090">SURINAME</option>
                                    <option value="0091">TRINIDAD E TOBAGO</option>
                                    <option value="0092">VENEZUELA</option>
                                    <option value="0093">ALBANIA</option>
                                    <option value="0094">ANDORRA</option>
                                    <option value="0095">AUSTRIA</option>
                                    <option value="0096">BULGARIA</option>
                                    <option value="0097">CHIPRE</option>
                                    <option value="0098">DINAMARCA</option>
                                    <option value="0099">EIRE</option>
                                    <option value="0100">ESCOCIA</option>
                                    <option value="0101">FEROES, ILHAS</option>
                                    <option value="0102">FINLANDIA</option>
                                    <option value="0103">GIBRALTAR</option>
                                    <option value="0104">GRECIA</option>
                                    <option value="0105">HOLANDA (OU PAISES BAIXOS)</option>
                                    <option value="0106">HUNGRIA</option>
                                    <option value="0107">BALEARES, ILHAS</option>
                                    <option value="0108">COSMOLEDO, ILHAS</option>
                                    <option value="0109">CANAL, ILHAS DO</option>
                                    <option value="0110">INGLATERRA</option>
                                    <option value="0111">IRLANDA DO NORTE</option>
                                    <option value="0112">IRLANDA</option>
                                    <option value="0113">ISLANDIA</option>
                                    <option value="0114">IUGUSLAVIA</option>
                                    <option value="0115">LIECHTENSTEIN</option>
                                    <option value="0116">LUXEMBURGO</option>
                                    <option value="0117">MAN, ILHAS DE</option>
                                    <option value="0118">MONACO</option>
                                    <option value="0119">NORUEGA</option>
                                    <option value="0120">MALTA, REPUBLICA DE</option>
                                    <option value="0121">PAIS DE GALES</option>
                                    <option value="0122">PAISES BAIXOS (OU HOLANDA)</option>
                                    <option value="0123">POLONIA</option>
                                    <option value="0124">ROMENIA</option>
                                    <option value="0125">SAO MARINHO</option>
                                    <option value="0126">SUECIA</option>
                                    <option value="0127">SVALBARD E JAN MAYER, ILHAS</option>
                                    <option value="0128">TCHECOSLOVAQUIA (ATUAL REPUBLI</option>
                                    <option value="0129">VATICANO, ESTADO DA CIDADE DO</option>
                                    <option value="0130">CROACIA</option>
                                    <option value="0131">SERVIA</option>
                                    <option value="0132">ESLOVENIA</option>
                                    <option value="0133">MACEDONIA, REPUBLICA DA</option>
                                    <option value="0134">BOSNIA HERZEGOVINA</option>
                                    <option value="0135">TCHECA, REPUBLICA (EX TCHECOSL</option>
                                    <option value="0136">ESLOVAQUIA</option>
                                    <option value="0137">MONTENEGRO</option>
                                    <option value="0138">AZERBAIJAO</option>
                                    <option value="0139">BASHKISTA</option>
                                    <option value="0140">BELARUS (BIELORRUSSIA, REPUBLI</option>
                                    <option value="0141">BURYAT</option>
                                    <option value="0142">CARELIA</option>
                                    <option value="0143">CASAQUISTAO</option>
                                    <option value="0144">CHECHEN INGUSTH</option>
                                    <option value="0145">CHUVASH</option>
                                    <option value="0146">DAGESTA</option>
                                    <option value="0147">ESTONIA</option>
                                    <option value="0148">GEORGIA</option>
                                    <option value="0149">GORNO ALTAI</option>
                                    <option value="0150">KABARDINO BALKAR</option>
                                    <option value="0151">KALMIR</option>
                                    <option value="0152">KARACHAEVOCHERKESS</option>
                                    <option value="0153">KHAKASS</option>
                                    <option value="0154">KOMI</option>
                                    <option value="0155">LETONIA</option>
                                    <option value="0156">LITUANIA</option>
                                    <option value="0157">MARI</option>
                                    <option value="0158">MOLDAVIA</option>
                                    <option value="0159">OSSETIA SETENTRIONAL</option>
                                    <option value="0160">QUIRQUISTAO</option>
                                    <option value="0161">TADJIQUISTAO</option>
                                    <option value="0162">TARTARIA</option>
                                    <option value="0163">TURCOMENISTAO (OU TURMOMENIA)</option>
                                    <option value="0164">TUVIN</option>
                                    <option value="0165">UCRANIA</option>
                                    <option value="0166">UDMURT</option>
                                    <option value="0167">UNIAO SOVIETICA</option>
                                    <option value="0168">USBEQUISTAO</option>
                                    <option value="0169">YAKUT</option>
                                    <option value="0170">ABISSINIA (ATUAL ETIOPIA)</option>
                                    <option value="0171">ACORES</option>
                                    <option value="0172">AFAR FRANCES (ATUAL DJIBUTI)</option>
                                    <option value="0173">AFRICA DO SUL, REPUBLICA DA</option>
                                    <option value="0174">ALTO VOLTA (ATUAL BURKINA FASS</option>
                                    <option value="0175">ANGOLA</option>
                                    <option value="0176">ARGELIA</option>
                                    <option value="0177">BECHUANA (ATUAL BTSUANA)</option>
                                    <option value="0178">BENIN</option>
                                    <option value="0179">BOTSWANA</option>
                                    <option value="0180">BURUNDI</option>
                                    <option value="0181">CAMAROES</option>
                                    <option value="0182">CEUTA E MELILLA</option>
                                    <option value="0183">CHADE</option>
                                    <option value="0184">COMOROS, ILHAS</option>
                                    <option value="0185">CONGO, REPUBLICA DO</option>
                                    <option value="0186">COSTA DO MARFIM</option>
                                    <option value="0187">DAOME (ATUAL BENIN)</option>
                                    <option value="0188">DJIBUTI</option>
                                    <option value="0189">EGITO, REBUPLICA ARABE DO</option>
                                    <option value="0190">ETIOPIA</option>
                                    <option value="0191">GABAO, REPUBLICA DO</option>
                                    <option value="0192">GAMBIA</option>
                                    <option value="0193">GANA</option>
                                    <option value="0194">GAZA</option>
                                    <option value="0195">GUINE</option>
                                    <option value="0196">GUINE EQUATORIAL</option>
                                    <option value="0197">INFNI</option>
                                    <option value="0198">ASCENSAO E TRISTAO DA CUNHA, I</option>
                                    <option value="0199">CANARIAS, ILHAS</option>
                                    <option value="0200">LESOTO</option>
                                    <option value="0201">LIBERIA</option>
                                    <option value="0202">LIBIA</option>
                                    <option value="0203">MADEIRA</option>
                                    <option value="0204">MALAWI (OU MALAUI)</option>
                                    <option value="0205">MADAGASCAR</option>
                                    <option value="0206">MALI</option>
                                    <option value="0207">MARROCOS</option>
                                    <option value="0208">MAURICIO</option>
                                    <option value="0209">MAURITANIA</option>
                                    <option value="0210">MOCAMBIQUE</option>
                                    <option value="0211">NGUANE</option>
                                    <option value="0212">NIGER, REPUBLICA DO</option>
                                    <option value="0213">NIGERIA</option>
                                    <option value="0214">PAPUA NOVA GUINE</option>
                                    <option value="0215">AFRICANA, PRACAS NORTE</option>
                                    <option value="0216">AFRICANO,  PROTETOR DO SUDOEST</option>
                                    <option value="0217">QUENIA</option>
                                    <option value="0218">AFRICANA, REPUBLICA CENTRAL</option>
                                    <option value="0219">REUNIAO</option>
                                    <option value="0220">RODESIA (ATUAL ZIMBABWE)</option>
                                    <option value="0221">RUANDA</option>
                                    <option value="0222">SAARA ESPANHOL</option>
                                    <option value="0223">SANTA HELENA</option>
                                    <option value="0224">SAO TOME E PRINCIPE</option>
                                    <option value="0225">SEYCHELLES</option>
                                    <option value="0226">SERRA LEOA</option>
                                    <option value="0227">SOMALIA, REPUBLICA</option>
                                    <option value="0228">SUAZILANDIA</option>
                                    <option value="0229">SUDAO</option>
                                    <option value="0230">TANGANICA</option>
                                    <option value="0231">OCEANO INDICO, TERRITORIO BRIT</option>
                                    <option value="0232">TRANSKEI</option>
                                    <option value="0233">TOGO</option>
                                    <option value="0234">TUNISIA</option>
                                    <option value="0235">UGANDA</option>
                                    <option value="0236">CONGO, REPUBLICA DEMOCRATICA (</option>
                                    <option value="0237">ZAMBIA</option>
                                    <option value="0238">BURKINA FASSO</option>
                                    <option value="0239">ZIMBABWE</option>
                                    <option value="0240">NAMIBIA</option>
                                    <option value="0241">AFEGANISTAO</option>
                                    <option value="0242">ARABIA SAUDITA</option>
                                    <option value="0243">BAHRAIN</option>
                                    <option value="0244">BIRMANIA</option>
                                    <option value="0245">BRUNEI</option>
                                    <option value="0246">BUTAO</option>
                                    <option value="0247">CATAR</option>
                                    <option value="0248">CEILAO (ATUAL SRI-LANKA)</option>
                                    <option value="0249">TAIWAN(REPUBLICA CHINA/ILHA FO</option>
                                    <option value="0250">COVEITE (ATUAL KUWAIT)</option>
                                    <option value="0251">EMIRADOS ARABES UNIDOS</option>
                                    <option value="0252">FILIPINAS</option>
                                    <option value="0253">HONG-KONG (CHINA)</option>
                                    <option value="0254">IEMEN</option>
                                    <option value="0255">INDIA</option>
                                    <option value="0256">INDONESIA</option>
                                    <option value="0257">IRA</option>
                                    <option value="0258">IRAQUE</option>
                                    <option value="0259">ISRAEL</option>
                                    <option value="0260">JORDANIA</option>
                                    <option value="0261">CAMBOJA (KMER)</option>
                                    <option value="0262">KUWAIT</option>
                                    <option value="0263">LAOS</option>
                                    <option value="0264">LIBANO</option>
                                    <option value="0265">MACAU (CHINA)</option>
                                    <option value="0266">MALASIA</option>
                                    <option value="0267">MALDIVAS, ILHAS</option>
                                    <option value="0268">MASCATE</option>
                                    <option value="0269">MONGOLIA</option>
                                    <option value="0270">NEPAL</option>
                                    <option value="0271">OMAN</option>
                                    <option value="0272">PALESTINA</option>
                                    <option value="0273">PAQUISTAO</option>
                                    <option value="0274">RUIQUIU, ILHAS</option>
                                    <option value="0275">SINGAPURA (OU CINGAPURA)</option>
                                    <option value="0276">SEQUIN</option>
                                    <option value="0277">SIRIA</option>
                                    <option value="0278">SRI-LANKA</option>
                                    <option value="0279">TAILANDIA</option>
                                    <option value="0280">TREGUA, ESTADO</option>
                                    <option value="0281">TURQUIA</option>
                                    <option value="0282">VIETNA DO NORTE</option>
                                    <option value="0283">VIETNA DO SUL</option>
                                    <option value="0284">MIANMAR</option>
                                    <option value="0285">MANAHIKI, ARQUIPELAGO</option>
                                    <option value="0286">MIDWAY, ILHAS</option>
                                    <option value="0287">ASHMORE E CARTIER</option>
                                    <option value="0288">AUSTRALIA</option>
                                    <option value="0289">BISMARK, ARQUIPELAGO DE</option>
                                    <option value="0290">COOK, ILHAS</option>
                                    <option value="0291">FIJI, REPUBLICA DE</option>
                                    <option value="0292">GUAN</option>
                                    <option value="0293">BAKER, ILHAS</option>
                                    <option value="0294">CANTAO E ENDERBURG, ILHAS</option>
                                    <option value="0295">CAROLINAS, ILHAS</option>
                                    <option value="0296">PACIFICO, ILHAS DO</option>
                                    <option value="0297">CHRISTMAS, ILHAS</option>
                                    <option value="0298">KIRIBATI (ANTIGA GILBERT, ILHA</option>
                                    <option value="0299">HOWLAND E JARVIS, ILHAS</option>
                                    <option value="0300">JOHNSTON E SAND, ILHAS</option>
                                    <option value="0301">KINGMAN REEF, ILHAS</option>
                                    <option value="0302">MACQUAIRE, ILHAS</option>
                                    <option value="0303">MARIANAS, ILHAS</option>
                                    <option value="0304">MARSHALL, ILHAS</option>
                                    <option value="0305">MACDONAL E HEARD, ILHAS</option>
                                    <option value="0306">NIEU, ILHAS</option>
                                    <option value="0307">NORFOLK, ILHAS</option>
                                    <option value="0308">PALAU, ILHAS</option>
                                    <option value="0309">SALOMAO, ILHAS</option>
                                    <option value="0310">TOKELAU, ILHAS</option>
                                    <option value="0311">WAKE, ILHAS</option>
                                    <option value="0312">KALIMATAN</option>
                                    <option value="0313">LINHA, ILHAS</option>
                                    <option value="0314">NAURU</option>
                                    <option value="0315">NOVA CALEDONIA, ILHAS</option>
                                    <option value="0316">NOVA GUINE</option>
                                    <option value="0317">NOVA ZELANDIA</option>
                                    <option value="0318">NOVAS HEBRIDAS, ILHAS (EX VANU</option>
                                    <option value="0319">PAPUA, TERRITORIO DE</option>
                                    <option value="0320">PASCOA, ILHAS</option>
                                    <option value="0321">PITCAIRIN, ILHAS</option>
                                    <option value="0322">POLINESIA FRANCESA</option>
                                    <option value="0323">SABAH</option>
                                    <option value="0324">SAMOA AMERICANA (OU SAMOA ORIE</option>
                                    <option value="0325">SAMOA OCIDENTAL</option>
                                    <option value="0326">SANTA CRUZ, ILHAS</option>
                                    <option value="0327">SARAWAK</option>
                                    <option value="0328">COCOS, TERRITORIO DE</option>
                                    <option value="0329">TIMOR (OU TIMOR LESTE)</option>
                                    <option value="0330">TONGAS</option>
                                    <option value="0331">TUVALU</option>
                                    <option value="0332">WALLIS E FUTUNA, ILHAS</option>
                                    <option value="0333">BRITANICO, TERRITORIO ANTARTIC</option>
                                    <option value="0334">FRANCESA, ANTARTICA</option>
                                    <option value="0335">AUSTRALIA, TERRITORIO ANTARTIC</option>
                                    <option value="0336">CHILENO, ANTARTICO</option>
                                    <option value="0337">ARGENTINO, ANTARTICO</option>
                                    <option value="0338">NORUEGES, ANTARTICO</option>
                                    <option value="0339">APATRIDA</option>
                                    <option value="0340">ROSS, DEPENDENCIA DE (NOVA ZEL</option>
                                    <option value="0341">TERRAS AUSTRAIS</option>
                                    <option value="0342">BANGLADESH</option>
                                    <option value="0343">CABO VERDE</option>
                                    <option value="0344">GUINE BISSAU</option>
                                    <option value="0345">IEMEN DO SUL</option>
                                    <option value="0346">KARA KALPAK</option>
                                    <option value="0347">ARMENIA</option>
                                    <option value="0348">RUSSIA</option>
                                    <option value="0349">SENEGAL</option>
                                    <option value="0350">TANZANIA</option>
                                    <option value="0351">COREIA DO NORTE</option>
                                    <option value="0352">ANGUILLA</option>
                                    <option value="0353">CAYMAN, ILHAS</option>
                                    <option value="0354">LABUAN, ILHAS</option>
                                    <option value="0355">MICRONESIA</option>
                                    <option value="0356">NIUE</option>
                                    <option value="0357">SAARA OCIDENTAL</option>
                                    <option value="0358">VIETNA</option>
                                    <option value="0359">ERITREIA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Data de Emissão</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Data Fim Validade</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Estado Civil</td>
                            <td>
                                <select name="estado_civil" id="estado_civil">
                                    <option value=""></option>
                                    <option value="1">SOLTEIRO (A)</option>
                                    <option value="3">DIVORCIADO (A)</option>
                                    <option value="4">SEPARADO (A) JUDICIALMENTE</option>
                                    <option value="5">VIÚVO (A)</option>
                                    <option value="7" selected="selected">CASADO (A) COM COMUNHÃO TOTAL DE BENS</option>
                                    <option value="8">CASADO (A) COM SEPARAÇÃO DE BENS</option>
                                    <option value="9">CASADO (A) COM COMUNHÃO PARCIAL DE BENS</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Tipo de Ocupação</td>
                            <td>
                                <select name="tipo_ocupacao" id="tipo_ocupacao">
                                    <option value="" selected></option>
                                    <option value="01">FORMAL</option>
                                    <option value="02">INFORMAL</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Ocupação Formal</td>
                            <td>
                                <select name="ocupacao_formal" id="ocupacao_formal">
                                    <option value="" selected></option>
                                    <option value="125">ADMINISTRADOR</option>
                                    <option value="131">ADVOGADO</option>
                                    <option value="405">AGENCIADOR DE PROPAGANDA</option>
                                    <option value="292">AGENTE ADMINISTRATIVO</option>
                                    <option value="595">AGENTE DE SERVICOS FUNERARIOS E EMBALSAMADOR</option>
                                    <option value="594">AGENTE DE VIAGEM E GUIA DE TURISMO</option>
                                    <option value="103">AGRONOMO</option>
                                    <option value="591">ALFAIATE</option>
                                    <option value="126">ANALISTA DE SISTEMAS</option>
                                    <option value="923">APOSENTADO EXCETO FUNCIONARIO PUBLICO</option>
                                    <option value="102">ARQUITETO</option>
                                    <option value="134">ASSISTENTE SOCIAL</option>
                                    <option value="128">ASTRONOMO E METEOROLOGISTA</option>
                                    <option value="168">ATLETA PROFISSIONAL E TECNICO EM DESPORTOS</option>
                                    <option value="162">ATOR E DIRETOR DE ESPETACULOS PUBLICOS</option>
                                    <option value="123">ATUARIO E MATEMATICO</option>
                                    <option value="394">AUXILIAR DE ESCRITORIO E ASSEMELHADOS</option>
                                    <option value="596">AUXILIAR DE LABORATORIO</option>
                                    <option value="395">BANCARIO E ECONOMIARIO</option>
                                    <option value="135">BIBLIOTECARIO ARQUIVISTA MUSEOLOGO E ARQUEOLOGO</option>
                                    <option value="116">BIOLOGO E BIOMEDICO</option>
                                    <option value="931">BOLSISTA ESTAGIARIO E ASSEMELHADOS</option>
                                    <option value="544">BOMBEIRO E INSTALADOR DE GAS AGUA ESGOTO E ASSEMELHADOS</option>
                                    <option value="511">CABELEIREIRO BARBEIRO MANICURE PEDICURE MAQUILADOR ESTETICISTA E MASSAGISTA</option>
                                    <option value="163">CANTOR E COMPOSITOR</option>
                                    <option value="907">CAPITALISTA RECEBENDO RENDIMENTO DE APLICACAO DE CAPITAL EM ATIVOS FINANCEIROS</option>
                                    <option value="391">CHEFE INTERMEDIARIO</option>
                                    <option value="183">COMANDANTE DE EMBARCACOES</option>
                                    <option value="182">COMISSARIO DE BORDO</option>
                                    <option value="136">COMUNICOLOGO</option>
                                    <option value="124">CONTADOR</option>
                                    <option value="533">CONTRAMESTRE DE EMBARCACOES</option>
                                    <option value="165">COREOGRAFO E BAILARINO</option>
                                    <option value="403">CORRETOR DE IMOVEIS, SEGUROS, TITULOS E VALORES</option>
                                    <option value="193">DECORADOR</option>
                                    <option value="214">DELEGADO DE POLICIA</option>
                                    <option value="491">DEMONSTRADOR</option>
                                    <option value="192">DESENHISTA COMERCIAL</option>
                                    <option value="105">DESENHISTA INDUSTRIAL</option>
                                    <option value="158">DESENHISTA TECNICO</option>
                                    <option value="593">DESPACHANTE INCLUSIVE O ADUANEIRO</option>
                                    <option value="212">DIPLOMATA</option>
                                    <option value="301">DIRETOR DE EMPRESAS</option>
                                    <option value="144">DIRETOR DE ESTABELECIMENTO DE ENSINO</option>
                                    <option value="121">ECONOMISTA</option>
                                    <option value="703">ELETRICISTA E ASSEMELHADOS</option>
                                    <option value="542">ELETRICISTA MANUTENCAO VEICULO AUTO MAQ APARELHOS ELETRICO ELETRONICO E TELECOM</option>
                                    <option value="598">EMPREGADO DOMESTICO</option>
                                    <option value="161">EMPRESARIO E PRODUTOR DE ESPETACULOS PUBLICOS</option>
                                    <option value="113">ENFERMEIRO E NUTRICIONISTA</option>
                                    <option value="101">ENGENHEIRO</option>
                                    <option value="191">ESCULTOR, PINTOR E ASSEMELHADOS</option>
                                    <option value="949">ESPOLIO</option>
                                    <option value="122">ESTATISTICO</option>
                                    <option value="597">ESTIVADOR CARREGADOR EMBALADOR E ASSEMELHADOS</option>
                                    <option value="117">FARMACEUTICO</option>
                                    <option value="413">FEIRANTE</option>
                                    <option value="213">FISCAL</option>
                                    <option value="106">FISICO</option>
                                    <option value="114">FISIOTERAPEUTA E TERAPEUTA OCUPACIONAL</option>
                                    <option value="118">FONOAUDIOLOGO</option>
                                    <option value="922">FUNCIONARIO PUBLICO CIVIL APOSENTADO</option>
                                    <option value="605">GARIMPEIRO</option>
                                    <option value="127">GEOGRAFO</option>
                                    <option value="107">GEOLOGO</option>
                                    <option value="303">GERENTE</option>
                                    <option value="521">GOVERNANTA DE HOTEL CAMAREIRO PORTEIRO COZINHEIRO E GARCOM</option>
                                    <option value="717">JOALHEIROS E OURIVES</option>
                                    <option value="412">JORNALEIRO</option>
                                    <option value="171">JORNALISTA</option>
                                    <option value="543">LANTERNEIRO E PINTOR DE VEICULOS METALICOS</option>
                                    <option value="404">LEILOEIRO, AVALIADOR E ASSEMELHADOS</option>
                                    <option value="166">LOCUTOR E COMENTARISTA DE RADIO E TELEVISAO E RADIALISTA</option>
                                    <option value="535">MAQUINISTA E FOGUISTA DE EMBARCACOES, LOCOMOTIVAS E ASSEMELH</option>
                                    <option value="534">MARINHEIRO E ASSEMELHADOS</option>
                                    <option value="541">MECANICO DE MANUTENCAO DE VEICULOS AUTOMOTORES E MAQUINAS</option>
                                    <option value="702">MECANICO MANUTENCAO MONTADOR PREPARADOR OPERADOR DE MAQ E APARELHOS PROD INDUST</option>
                                    <option value="111">MEDICO</option>
                                    <option value="701">MESTRE E CONTRAMESTRE</option>
                                    <option value="295">MILITAR EM GERAL</option>
                                    <option value="921">MILITAR REFORMADO</option>
                                    <option value="492">MODELO DE MODAS</option>
                                    <option value="532">MOTORISTA DE VEICULOS DE TRANSPORTE DE CARGA</option>
                                    <option value="531">MOTORISTA DE VEICULOS DE TRANSPORTE DE PASSAGEIROS</option>
                                    <option value="164">MUSICO</option>
                                    <option value="291">OCUPANTE DE CARGO DE DIRECAO E ASSESSORAMENTO INTERMEDIARIO</option>
                                    <option value="215">OCUPANTE DE CARGO DE DIRECAO E ASSESSORAMENTO SUPERIOR</option>
                                    <option value="115">ODONTOLOGO</option>
                                    <option value="216">OFICIAIS DAS FORCAS ARMADAS E FORCAS AUXILIARES</option>
                                    <option value="167">OPERADOR DE CAMERAS DE CINEMA E TELEVISAO</option>
                                    <option value="145">OUTROS TRABALHADORES DE NIVEL SUPERIOR LIGADOS AO ENSINO</option>
                                    <option value="924">PENSIONISTA</option>
                                    <option value="181">PILOTO DE AERONAVES</option>
                                    <option value="203">PODER EXECUTIVO PRESIDENTE MINISTRO GOVERNADOR SECRETARIO E MEMBROS DO MP</option>
                                    <option value="205">PODER JUDICIARIO MINISTRO DE TRIBUNAL SUPERIOR DESEMBARGADOR E JUIZ</option>
                                    <option value="201">PODER LEGISLATIVO SENADOR DEPUTADO FEDERAL DEPUTADO ESTADUAL E VEREADOR</option>
                                    <option value="501">PORTEIRO DE EDIFICIO ASCENSORISTA GARAGISTA E FAXINEIRO</option>
                                    <option value="211">PROCURADOR E ASSEMELHADOS</option>
                                    <option value="143">PROFESSORES DE ENSINO DE PRIMEIRO E SEGUNDO GRAUS</option>
                                    <option value="142">PROFESSORES DE ENSINO SUPERIOR</option>
                                    <option value="456">PROFISSAO CRIADA PARA TESTE</option>
                                    <option value="138">PROFISSIONAIS DE LETRAS E DE ARTES</option>
                                    <option value="901">PROPRIETARIO DE ESTABELECIMENTO AGRICOLA DA PECUARIA FLORESTAL</option>
                                    <option value="902">PROPRIETARIO DE ESTABELECIMENTO COMERCIAL</option>
                                    <option value="904">PROPRIETARIO DE ESTABELECIMENTO DE PRESTACAO DE SERVICOS</option>
                                    <option value="903">PROPRIETARIO DE ESTABELECIMENTO INDUSTRIAL</option>
                                    <option value="906">PROPRIETARIO DE IMOVEL, RECEBENDO RENDIMENTO DE ALUGUEL</option>
                                    <option value="905">PROPRIETARIO DE MICROEMPRESA</option>
                                    <option value="592">PROTETICO</option>
                                    <option value="132">PSICOLOGO</option>
                                    <option value="172">PUBLICITARIO</option>
                                    <option value="104">QUIMICO</option>
                                    <option value="137">RELACOES PUBLICAS</option>
                                    <option value="910">SACERDOTES OU MEMBROS DE ORDENS OU SEITAS RELIGIOSAS</option>
                                    <option value="393">SECRETARIO ESTENOGRAFO DATILOGRAFO RECEPCIONISTA TELEFONISTA E ASSEMELHADOS</option>
                                    <option value="396">SECURITARIO</option>
                                    <option value="293">SERVENTUARIO DE JUSTICA</option>
                                    <option value="297">SERVIDOR PUBLICO ESTADUAL</option>
                                    <option value="296">SERVIDOR PUBLICO FEDERAL</option>
                                    <option value="298">SERVIDOR PUBLICO MUNICIPAL</option>
                                    <option value="133">SOCIOLOGO</option>
                                    <option value="401">SUPERVISOR, INSPETOR E AGENTE DE COMPRAS E VENDAS</option>
                                    <option value="294">TABELIAO</option>
                                    <option value="152">TECNICO DE BIOLOGIA</option>
                                    <option value="151">TECNICO DE CONTABILIDADE E DE ESTATISTICA</option>
                                    <option value="156">TECNICO DE ELETRICIDADE, ELETRONICA E TELECOMUNICACOES</option>
                                    <option value="157">TECNICO DE LABORATORIO E RAIO X</option>
                                    <option value="155">TECNICO DE MECANICA</option>
                                    <option value="154">TECNICO DE QUIMICA</option>
                                    <option value="153">TECNICO EM AGRONOMIA E AGRIMENSURA</option>
                                    <option value="108">TECNOLOGO</option>
                                    <option value="601">TRABALHADOR AGRICOLA</option>
                                    <option value="602">TRABALHADOR DA PECUARIA</option>
                                    <option value="604">TRABALHADOR DA PESCA</option>
                                    <option value="711">TRABALHADOR DE ARTES GRAFICAS</option>
                                    <option value="709">TRABALHADOR DE CONSTRUCAO CIVIL</option>
                                    <option value="713">TRABALHADOR DE FABRICACAO DE ARTEFATOS DE MADEIRA</option>
                                    <option value="715">TRABALHADOR DE FABRICACAO DE CALCADOS E ARTEFATOS DE COURO</option>
                                    <option value="714">TRABALHADOR DE FABRICACAO DE PAPEL E PAPELAO</option>
                                    <option value="716">TRABALHADOR DE FABRICACAO DE PRODUTOS DE BORRACHA E PLASTICO</option>
                                    <option value="712">TRABALHADOR DE FABRICACAO DE PRODUTOS TEXTEIS EXCETO ROUPAS</option>
                                    <option value="705">TRABALHADOR DE FABRICACAO DE ROUPAS</option>
                                    <option value="710">TRABALHADOR DE FABRICACAO E PREPARACAO DE ALIMENTOS E BEBIDA</option>
                                    <option value="704">TRABALHADOR DE INSTALACOES DE PROCESSAMENTO QUIMICO</option>
                                    <option value="706">TRABALHADOR DE TRATAMENTO DE FUMO E DE FABRICACAO DE CIGARROS E CHARUTOS</option>
                                    <option value="708">TRABALHADOR DE USINAGEM DE METAIS</option>
                                    <option value="392">TRABALHADOR DOS SERVICOS DE CONTABILIDADE DE CAIXA E TRABALHADORES ASSEMELHADOS</option>
                                    <option value="603">TRABALHADOR FLORESTAL</option>
                                    <option value="707">TRABALHADOR METALURGICO E SIDERURGICO</option>
                                    <option value="517">TRABALHADORES DOS SERVICOS DE PROTECAO E SEGURANCA EXCETO MILITAR</option>
                                    <option value="411">VENDEDOR DE COMERCIO VAREJISTA E ATACADISTA</option>
                                    <option value="402">VENDEDOR PRACISTA REPRESENTANTE COMERCIAL CAIXEIRO VIAJANTE E ASSEMELHADOS</option>
                                    <option value="112">VETERINARIO E ZOOTECNISTA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Ocupação Informal</td>
                            <td>
                                <select name="ocupacao_informal" id="ocupacao_informal">
                                    <option value="" selected></option>
                                    <option value="187689">ACOUGUEIRO</option>
                                    <option value="72980821">ACUPUNTURISTA</option>
                                    <option value="72981095">ADESTRADOR DE ANIMAIS</option>
                                    <option value="72981131">ADMINISTRADOR</option>
                                    <option value="518729">ADVOGADO</option>
                                    <option value="72981142">AFIADOR</option>
                                    <option value="187690">AGRICULTOR</option>
                                    <option value="551315">AGRONOMO</option>
                                    <option value="72981148">ALAMBIQUEIRO</option>
                                    <option value="187691">ALFAIATE</option>
                                    <option value="547893">ANALISTA DE SISTEMA</option>
                                    <option value="530056">ARQUITETO</option>
                                    <option value="72981171">ARTISTA DE CIRCO</option>
                                    <option value="594629">ARTISTA DE DANÇA</option>
                                    <option value="187694">ARTISTA VISUAL</option>
                                    <option value="72981178">ASTROLOGO E NUMEROLOGO</option>
                                    <option value="2885158">ATIVIDADES RELIGIOSAS</option>
                                    <option value="72981183">ATLETA</option>
                                    <option value="594534">ATOR</option>
                                    <option value="187698">AUXILIAR GERAL</option>
                                    <option value="187699">BABA</option>
                                    <option value="187702">BARBEIRO</option>
                                    <option value="72981223">BIOLOGO</option>
                                    <option value="72981229">BIOMEDICO</option>
                                    <option value="187704">BORDADOR</option>
                                    <option value="187705">BORRACHEIRO</option>
                                    <option value="187708">CABELEIREIRO(A)</option>
                                    <option value="551327">CAMAREIRO(A)</option>
                                    <option value="187731">CAMINHONEIRO AUTONOMO</option>
                                    <option value="551340">CANTOR(A)</option>
                                    <option value="187710">CARPINTEIRO</option>
                                    <option value="72981250">CARREGADOR DE MERCADORIAS</option>
                                    <option value="187711">CARROCEIRO</option>
                                    <option value="594226">CARTOGRAFO</option>
                                    <option value="72981272">CATADORES DE MATERIAL RECICLAVEL</option>
                                    <option value="72981281">CERAMISTA</option>
                                    <option value="72981292">CHAVEIRO</option>
                                    <option value="187712">COBRADOR</option>
                                    <option value="594564">COMENTARISTA DE RADIO E TELEVISAO</option>
                                    <option value="594668">COMPOSITOR</option>
                                    <option value="187713">CONFEITEIRO(A)</option>
                                    <option value="594320">CONSERTADOR DE APARELHO ELETRONICO ELETRODOMESTICO</option>
                                    <option value="548201">CONSULTOR</option>
                                    <option value="530063">CONTADOR</option>
                                    <option value="187714">CORRETOR</option>
                                    <option value="187715">COSTUREIRO(A)</option>
                                    <option value="187717">COZINHEIRO(A)</option>
                                    <option value="72981314">CROCHETEIRO A MAO</option>
                                    <option value="72981330">CUIDADOR DE IDOSOS</option>
                                    <option value="187718">DECORADOR(A)</option>
                                    <option value="187719">DEDETIZADOR</option>
                                    <option value="701108">DEPOSITOS PCI PAI</option>
                                    <option value="908743">DESENHISTA</option>
                                    <option value="187720">DESPACHANTE</option>
                                    <option value="187722">DIGITADOR</option>
                                    <option value="551380">ECONOMISTA</option>
                                    <option value="187724">ELETRICISTA</option>
                                    <option value="187703">ENCANADOR</option>
                                    <option value="187725">ENFERMEIRO(A)</option>
                                    <option value="518730">ENGENHEIRO</option>
                                    <option value="72981341">ENGRAXATE</option>
                                    <option value="72981358">ESOTERICO E PARANORMAL</option>
                                    <option value="72981345">ESTETICISTA</option>
                                    <option value="187726">ESTOFADOR</option>
                                    <option value="72981429">EXTRATIVISTA</option>
                                    <option value="72981434">FARMACEUTICO</option>
                                    <option value="187727">FAXINEIRO(A)</option>
                                    <option value="187728">FEIRANTE</option>
                                    <option value="784603">FISIOTERAPEUTA</option>
                                    <option value="551383">FONAUDIOLOGO</option>
                                    <option value="187730">FOTOGRAFO(A)</option>
                                    <option value="187737">FUNILEIRO</option>
                                    <option value="72981475">GANDULA</option>
                                    <option value="187733">GARCOM GARCONETE</option>
                                    <option value="578245">GEOLOGO</option>
                                    <option value="72981490">GESSEIRO</option>
                                    <option value="72981506">GUARDADOR DE VEÍCULOS (FLANELINHA)</option>
                                    <option value="187735">GUIA DE TURISMO</option>
                                    <option value="72981528">INTERPRETE</option>
                                    <option value="187736">JARDINEIRO</option>
                                    <option value="72981549">JOALHEIRO E OURIVES</option>
                                    <option value="72981563">JORNALEIRO</option>
                                    <option value="551392">JORNALISTA</option>
                                    <option value="72981582">LADRILHEIRO</option>
                                    <option value="187738">LAVADOR DE VEÍCULOS</option>
                                    <option value="72981593">LAVADOR E PASSADOR DE ROUPAS</option>
                                    <option value="72981607">LIMPADOR DE FACHADAS</option>
                                    <option value="187741">MANICURE, PEDICURE</option>
                                    <option value="72981611">MANOBRISTA</option>
                                    <option value="187742">MAQUIADOR</option>
                                    <option value="187745">MARCENEIRO</option>
                                    <option value="72981622">MASSAGISTA</option>
                                    <option value="187746">MECÂNICO</option>
                                    <option value="72981634">MINHOCULTOR</option>
                                    <option value="578459">MODELO.</option>
                                    <option value="72981649">MONTADOR DE MÓVEIS</option>
                                    <option value="187747">MOTOBOY</option>
                                    <option value="187748">MOTORISTA</option>
                                    <option value="532571">MUSICO</option>
                                    <option value="530049">MÉDICO</option>
                                    <option value="552102">NUTRICIONISTA</option>
                                    <option value="532818">ODONTOLOGO</option>
                                    <option value="72981662">OLEIRO (FAB TELHAS E TIJOLOS)</option>
                                    <option value="594234">OPERADOR DE CÂMERA</option>
                                    <option value="187749">PADEIRO</option>
                                    <option value="187750">PECUARISTA</option>
                                    <option value="187751">PEDREIRO</option>
                                    <option value="559587">PENSÃO INFORMAL</option>
                                    <option value="188540">PESCADOR.</option>
                                    <option value="187753">PESQUISADOR</option>
                                    <option value="85635245">PILOTO DE AERONAVE</option>
                                    <option value="187754">PINTOR</option>
                                    <option value="72981675">PIPOQUEIRO</option>
                                    <option value="72981687">PODÓLOGO</option>
                                    <option value="72981697">POETA</option>
                                    <option value="187755">PORTEIRO, VIGIA</option>
                                    <option value="531800">PROFESSOR</option>
                                    <option value="72981710">PROFISSIONAL DO SEXO</option>
                                    <option value="532425">PROGRAMADOR</option>
                                    <option value="594222">PROMOTOR DE EVENTOS</option>
                                    <option value="2604654">PROTÉTICO</option>
                                    <option value="551534">PSICÓLOGO</option>
                                    <option value="551586">PUBLICITÁRIO</option>
                                    <option value="72981722">QUIROPRAXISTA</option>
                                    <option value="72981731">RAIZEIRO</option>
                                    <option value="187756">RELOJOEIRO</option>
                                    <option value="187759">REPRESETANTE COMERCIAL</option>
                                    <option value="187783">SACOLEIRA</option>
                                    <option value="72981740">SALVA-VIDAS</option>
                                    <option value="187785">SAPATEIRO</option>
                                    <option value="187788">SERRALHEIRO</option>
                                    <option value="187789">SERVENTE DE OBRAS</option>
                                    <option value="187791">SERVIÇOS GERAIS</option>
                                    <option value="582532">SOCIO DE EMPRESA</option>
                                    <option value="72981890">SOLDADOR</option>
                                    <option value="187792">TAXISTA</option>
                                    <option value="72981899">TELHADOR</option>
                                    <option value="784607">TOPÓGRAFO</option>
                                    <option value="187721">TRABALHADOR DOMÉSTICO</option>
                                    <option value="187695">TRABALHADOR RURAL</option>
                                    <option value="72981910">TRADUTOR</option>
                                    <option value="187793">TRATORISTA</option>
                                    <option value="72981922">VASSOUREIRO</option>
                                    <option value="187692">VENDEDOR (DOMICÍLIO, AMBULANTES, BANCAS)</option>
                                    <option value="552310">VETERINÁRIO</option>
                                    <option value="72981927">VIDRACEIRO</option>
                                    <option value="187787">VIGILANTE E GUARDA DE SEGURANÇA</option>
                                    <option value="187796">ZELADOR</option>
                                    <option value="72981936">ZOOTECNISTA</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CPF Conjuge</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Nome Conjuge</td>
                            <td><input type="text" /></td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    );
}

export default Home;